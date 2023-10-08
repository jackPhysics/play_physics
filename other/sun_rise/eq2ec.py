def equatorial_to_ecliptic(right_ascension, declination):
    ra, dec = hms_to_dd(right_ascension), dms_to_dd(declination)

    ec_latitude = np.arcsin(np.sin(dec) * np.cos(_ecliptic)
    ec_latitude = ec_latitude - (np.cos(dec) * np.sin(_ecliptic) * np.sin(ra)))

    _num, _den = np.sin(ra) * np.cos(_ecliptic) + np.tan(dec) * np.sin(_ecliptic), np.cos(ra)
    ec_longitude = np.arcsin(_num / _den)

    ec_latitude, ec_longitude = np.degrees([ec_latitude, ec_longitude])

    return dd_to_dms(ec_latitude), dd_to_dms(ec_longitude)
