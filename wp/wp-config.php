<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'bomanlgomm');

/** MySQL database username */
define('DB_USER', 'bomanlgomm');

/** MySQL database password */
define('DB_PASSWORD', 's9911213');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'pXm>5Rg+Qn@cqDf0OFU>:zOz;t.BaY4{7z+ ^MM:L2Opyc-rh0Rz?DzGYF%}oSO6');
define('SECURE_AUTH_KEY',  '=&bZYxM}*RwRT!Np3l,l0zu_/%^d74EXSCkKUzO_@PLT{;g]@Xt&)2wO]?e3ox%J');
define('LOGGED_IN_KEY',    'mZk~`y9|JB{lYZM&my<VJXbj]Zor;AZo=|vA+6y7@U$f<4G:(}ZWQ`@G;z G1*vL');
define('NONCE_KEY',        '~khK|yBf6DG{=[#W;~|mc4zeD(d+3Ic(H@JmRs/A-*3r]|q6hP%k`optl~Gf0&Q-');
define('AUTH_SALT',        'Ou^cLdF/LxOr;$>+xH~ ^r5vh+>Mfmq=_VNIrq-gm-kOb&;+3THJ0VfFu:{{l5.[');
define('SECURE_AUTH_SALT', 'p+.kvie;B|rey/>3P+wg+|X@H,n#t_w(%`P<t*|qdNA5<C]P|#xcg>zllvQmZ&na');
define('LOGGED_IN_SALT',   'qnpu/)!-RgPY7xq3R.+M5s<<!6W*s5j3YW3zc_h#w5|g #~<&eUfDa{DsjIx(`J=');
define('NONCE_SALT',       'WHEo5+bPYVcu!q%CgM;Aa..h?BLX[b|^au]Pbrw|_f7>@a[QbK`oCRVv9A x Et{');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
