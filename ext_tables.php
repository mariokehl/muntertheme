<?php
if (!defined('TYPO3_MODE')) {
    die('Access denied.');
}

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
    $_EXTKEY, 'Configuration/TypoScript', 'muntertheme'
);

$newPageColumns = array(
    'css_id' => array(
        'exclude' => 0,
        'label' => 'LLL:EXT:muntertheme/Resources/Private/Language/locallang_db.xlf:pages.css_id',
        'config' => array(
            'type' => 'input',
            'size' => 10,
            'eval' => 'nospace,alphanum_x,lower,unique'
        ),
    ),
    'menu_icon' => array(
        'exclude' => 0,
        'label' => 'LLL:EXT:muntertheme/Resources/Private/Language/locallang_db.xlf:pages.menu_icon',
        'config' => array(
            'type' => 'select',
            'items' => array(
                array('LLL:EXT:muntertheme/Resources/Private/Language/locallang_db.xlf:pages.menu_icon.none', 'fa-beer'),
                array('LLL:EXT:muntertheme/Resources/Private/Language/locallang_db.xlf:pages.menu_icon.home', 'fa-home'),
                array('LLL:EXT:muntertheme/Resources/Private/Language/locallang_db.xlf:pages.menu_icon.user', 'fa-user'),
                array('LLL:EXT:muntertheme/Resources/Private/Language/locallang_db.xlf:pages.menu_icon.briefcase', 'fa-briefcase'),
                array('LLL:EXT:muntertheme/Resources/Private/Language/locallang_db.xlf:pages.menu_icon.gears', 'fa-gears'),
                array('LLL:EXT:muntertheme/Resources/Private/Language/locallang_db.xlf:pages.menu_icon.heart', 'fa-heart'),
                array('LLL:EXT:muntertheme/Resources/Private/Language/locallang_db.xlf:pages.menu_icon.envelope  ', 'fa-envelope'),
            ),
            'size' => 1,
            'maxitems' => 1,
            'eval' => ''
        ),
    ),
);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns('pages', $newPageColumns);

$TCA['pages']['palettes']['muntertheme'] = array(
    'canNotCollapse' => 1,
    'showitem' => 'css_id, menu_icon'
);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addToAllTCAtypes(
    'pages',
    '--palette--;LLL:EXT:muntertheme/Resources/Private/Language/locallang_db.xlf:pages.palettes.muntertheme;muntertheme,',
    '',
    'after:layout'
);