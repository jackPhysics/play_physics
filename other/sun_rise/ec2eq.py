def ecliptic_to_equatorial(ecliptic_latitude, ecliptic_longitude):
    ec_latitude, ec_longitude = dms_to_dd([ecliptic_latitude, ecliptic_longitude])

    dec = np.sin(ec_latitude) * np.cos(_ecliptic)
    dec = dec + (np.cos(ec_latitude) * np.sin(_ecliptic) * np.sin(ec_longitude))
    dec = np.arcsin(dec)

    _num = np.cos(ec_latitude) * np.sin(ec_longitude) * np.cos(_ecliptic)
    _num = _num - (np.sin(ec_latitude) * np.sin(_ecliptic))
    _den = np.cos(ec_latitude) * np.cos(ec_longitude)
    ra = np.arctan2(_num, _den)

    if ra < 0:
        ra = ra + 2 * np.pi

    ra, dec = np.degrees([ra, dec])

    return dd_to_hms(ra), dd_to_dms(dec)
