function moonDataUTC(year, month, day, hour = 0, minute = 0) {

    // ==================================================
    // 1. UTC date/time -> Julian Date
    // ==================================================

    let Y = year;
    let Mth = month;

    const d =
        day +
        hour / 24 +
        minute / 1440;

    if (Mth <= 2) {
        Y--;
        Mth += 12;
    }

    const A = Math.floor(Y / 100);
    const B = 2 - A + Math.floor(A / 4);

    const JD =
        Math.floor(365.25 * (Y + 4716)) +
        Math.floor(30.6001 * (Mth + 1)) +
        d + B - 1524.5;


    // ==================================================
    // 2. Approximate Delta-T
    //    Good for dates around 2005-2050
    // ==================================================

    const ty = year - 2000;

    const deltaT =
        62.92 +
        0.32217 * ty +
        0.005589 * ty * ty;

    // Dynamical Julian Date
    const JDE = JD + deltaT / 86400;


    // ==================================================
    // 3. LUNAR DAY
    //    Using the nearest-hour new-moon approximation
    // ==================================================

    function newMoon(k) {

        const T = k / 1236.85;

        const mean =
            2451550.09766 +
            29.530588861 * k +
            0.00015437 * T * T -
            0.000000150 * T * T * T +
            0.00000000073 * T * T * T * T;

        const E =
            1 -
            0.002516 * T -
            0.0000074 * T * T;

        const M =
            2.5534 +
            29.10535670 * k -
            0.0000014 * T * T -
            0.00000011 * T * T * T;

        const Mp =
            201.5643 +
            385.81693528 * k +
            0.0107582 * T * T +
            0.00001238 * T * T * T -
            0.000000058 * T * T * T * T;

        const rad = degrees =>
            degrees * Math.PI / 180;

        const correction =
            -0.40720 * Math.sin(rad(Mp)) +
             0.17241 * E * Math.sin(rad(M)) +
             0.01608 * Math.sin(rad(2 * Mp));

        return mean + correction;
    }


    let k = Math.floor(
        (JDE - 2451550.09766) / 29.530588861
    );

    while (newMoon(k) > JDE) {
        k--;
    }

    while (newMoon(k + 1) <= JDE) {
        k++;
    }

    const previousNewMoon = newMoon(k);
    const nextNewMoon = newMoon(k + 1);

    const lunarDay =
        JDE - previousNewMoon;

    const lunationLength =
        nextNewMoon - previousNewMoon;


    // ==================================================
    // 4. Lunar orbital arguments for latitude + distance
    // ==================================================

    const T =
        (JDE - 2451545.0) / 36525.0;

    let Lprime =
        218.3164477 +
        (481267.88123421 +
        (-0.0015786 +
        (1 / 538841 - T / 65194000) * T) * T) * T;

    let D =
        297.8501921 +
        (445267.1114034 +
        (-0.0018819 +
        (1 / 545868 - T / 113065000) * T) * T) * T;

    let M =
        357.5291092 +
        (35999.0502909 +
        (-0.0001536 +
        T / 24490000) * T) * T;

    let Mprime =
        134.9633964 +
        (477198.8675055 +
        (0.0087414 +
        (1 / 69699 - T / 14712000) * T) * T) * T;

    let F =
        93.2720950 +
        (483202.0175233 +
        (-0.0036539 +
        (-1 / 3526000 +
        T / 863310000) * T) * T) * T;

    let A1 =
        119.75 +
        131.849 * T;

    let A3 =
        313.45 +
        481266.484 * T;


    // ==================================================
    // 5. Convert angles to radians
    // ==================================================

    const normalise = x =>
        ((x % 360) + 360) % 360;

    const rad = x =>
        normalise(x) * Math.PI / 180;

    Lprime = rad(Lprime);
    D      = rad(D);
    M      = rad(M);
    Mprime = rad(Mprime);
    F      = rad(F);
    A1     = rad(A1);
    A3     = rad(A3);


    // ==================================================
    // 6. Earth's orbital eccentricity correction
    // ==================================================

    const E =
        1 -
        0.002516 * T -
        0.0000074 * T * T;

    const E2 = E * E;


    // ==================================================
    // 7. ECLIPTIC LATITUDE
    //    Meeus Table 47.B
    // ==================================================

    const latitudeTerms = [

        [0, 0, 0, 1, 5128122],
        [0, 0, 1, 1, 280602],
        [0, 0, 1,-1, 277693],
        [2, 0, 0,-1, 173237],
        [2, 0,-1, 1, 55413],
        [2, 0,-1,-1, 46271],
        [2, 0, 0, 1, 32573],
        [0, 0, 2, 1, 17198],
        [2, 0, 1,-1, 9266],
        [0, 0, 2,-1, 8822],
        [2,-1, 0,-1, 8216],
        [2, 0,-2,-1, 4324],
        [2, 0, 1, 1, 4200],
        [2, 1, 0,-1,-3359],
        [2,-1,-1, 1, 2463],
        [2,-1, 0, 1, 2211],
        [2,-1,-1,-1, 2065],
        [0, 1,-1,-1,-1870],
        [4, 0,-1,-1, 1828],
        [0, 1, 0, 1,-1794],
        [0, 0, 0, 3,-1749],
        [0, 1,-1, 1,-1565],
        [1, 0, 0, 1,-1491],
        [0, 1, 1, 1,-1475],
        [0, 1, 1,-1,-1410],
        [0, 1, 0,-1,-1344],
        [1, 0, 0,-1,-1335],
        [0, 0, 3, 1, 1107],
        [4, 0, 0,-1, 1021],
        [4, 0,-1, 1, 833],
        [0, 0, 1,-3, 777],
        [4, 0,-2, 1, 671],
        [2, 0, 0,-3, 607],
        [2, 0, 2,-1, 596],
        [2,-1, 1,-1, 491],
        [2, 0,-2, 1,-451],
        [0, 0, 3,-1, 439],
        [2, 0, 2, 1, 422],
        [2, 0,-3,-1, 421],
        [2, 1,-1, 1,-366],
        [2, 1, 0, 1,-351],
        [4, 0, 0, 1, 331],
        [2,-1, 1, 1, 315],
        [2,-2, 0,-1, 302],
        [0, 0, 1, 3,-283],
        [2, 1, 1,-1,-229],
        [1, 1, 0,-1, 223],
        [1, 1, 0, 1, 223],
        [0, 1,-2,-1,-220],
        [2, 1,-1,-1,-220],
        [1, 0, 1, 1,-185],
        [2,-1,-2,-1, 181],
        [0, 1, 2, 1,-177],
        [4, 0,-2,-1, 176],
        [4,-1,-1,-1, 166],
        [1, 0, 1,-1,-164],
        [4, 0, 1,-1, 132],
        [1, 0,-1,-1,-119],
        [4,-1, 0,-1, 115],
        [2,-2, 0, 1, 107]
    ];


    let sigmaB = 0;

    for (const term of latitudeTerms) {

        const [
            dCoeff,
            mCoeff,
            mpCoeff,
            fCoeff,
            amplitude
        ] = term;

        const argument =
            dCoeff  * D +
            mCoeff  * M +
            mpCoeff * Mprime +
            fCoeff  * F;

        let factor = 1;

        if (Math.abs(mCoeff) === 1) {
            factor = E;
        }

        if (Math.abs(mCoeff) === 2) {
            factor = E2;
        }

        sigmaB +=
            amplitude *
            factor *
            Math.sin(argument);
    }


    // Additional small latitude terms

    sigmaB +=
        -2235 * Math.sin(Lprime) +
          382 * Math.sin(A3) +
          175 * Math.sin(A1 - F) +
          175 * Math.sin(A1 + F) +
          127 * Math.sin(Lprime - Mprime) -
          115 * Math.sin(Lprime + Mprime);

    const latitude =
        sigmaB / 1000000;


    // ==================================================
    // 8. EARTH-MOON DISTANCE
    //    Meeus Table 47.A Sigma-r terms
    //
    //    coefficients are in 0.001 km
    // ==================================================

    const distanceTerms = [

        [0, 0, 1, 0,-20905355],
        [2, 0,-1, 0, -3699111],
        [2, 0, 0, 0, -2955968],
        [0, 0, 2, 0,  -569925],
        [0, 1, 0, 0,    48888],
        [0, 0, 0, 2,    -3149],
        [2, 0,-2, 0,   246158],
        [2,-1,-1, 0,  -152138],
        [2, 0, 1, 0,  -170733],
        [2,-1, 0, 0,  -204586],
        [0, 1,-1, 0,  -129620],
        [1, 0, 0, 0,   108743],
        [0, 1, 1, 0,   104755],
        [2, 0, 0,-2,    10321],
        [0, 0, 1,-2,    79661],
        [4, 0,-1, 0,   -34782],
        [0, 0, 3, 0,   -23210],
        [4, 0,-2, 0,   -21636],
        [2, 1,-1, 0,    24208],
        [2, 1, 0, 0,    30824],
        [1, 0,-1, 0,    -8379],
        [1, 1, 0, 0,   -16675],
        [2,-1, 1, 0,   -12831],
        [2, 0, 2, 0,   -10445],
        [4, 0, 0, 0,   -11650],
        [2, 0,-3, 0,    14403],
        [0, 1,-2, 0,    -7003],
        [2,-1,-2, 0,    10056],
        [1, 0, 1, 0,     6322],
        [2,-2, 0, 0,    -9884],
        [0, 1, 2, 0,     5751],
        [2,-2,-1, 0,    -4950],
        [2, 0, 1,-2,     4130],
        [4,-1,-1, 0,    -3958],
        [3, 0,-1, 0,     3258],
        [2, 1, 1, 0,     2616],
        [4,-1,-2, 0,    -1897],
        [0, 2,-1, 0,    -2117],
        [2, 2,-1, 0,     2354],
        [4, 0, 1, 0,    -1423],
        [0, 0, 4, 0,    -1117],
        [4,-1, 0, 0,    -1571],
        [1, 0,-2, 0,    -1739],
        [0, 0, 2,-2,    -4421],
        [0, 2, 1, 0,     1165],
        [2, 0,-1,-2,     8752]
    ];


    let sigmaR = 0;

    for (const term of distanceTerms) {

        const [
            dCoeff,
            mCoeff,
            mpCoeff,
            fCoeff,
            amplitude
        ] = term;

        const argument =
            dCoeff  * D +
            mCoeff  * M +
            mpCoeff * Mprime +
            fCoeff  * F;

        let factor = 1;

        if (Math.abs(mCoeff) === 1) {
            factor = E;
        }

        if (Math.abs(mCoeff) === 2) {
            factor = E2;
        }

        sigmaR +=
            amplitude *
            factor *
            Math.cos(argument);
    }


    const distanceKm =
        385000.56 +
        sigmaR / 1000;


    // ==================================================
    // 9. Return results
    // ==================================================

    return {

        lunarDay:
            lunarDay,

        lunationLength:
            lunationLength,

        latitude:
            latitude,

        latitudeDirection:
            latitude > 0 ? "north" :
            latitude < 0 ? "south" :
            "on ecliptic",

        distanceKm:
            distanceKm
    };
}
