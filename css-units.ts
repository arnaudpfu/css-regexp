export const ANGLE_UNITS: string[] = ['deg', 'grad', 'rad', 'turn'];

export const FREQUENCY_UNITS: string[] = ['Hz', 'kHz'];

export const RESOLUTION_UNITS: string[] = ['dpcm', 'dpi', 'dppx', 'dppx', 'x'];

export const TIME_UNITS: string[] = ['ms', 's'];

export const LENGTH_UNITS: string[] = [
    'cap',
    'ch',
    'cm',
    'em',
    'ex',
    'ic',
    'in',
    'mm',
    'pc',
    'pt',
    'px',
    'Q',
    'rem',
    'vh',
    'vmax',
    'vmin',
    'vw',
    '%',//Not exactly a CSS unit (operator)
];

export const CSS_UNITS: string[] = [
    ...ANGLE_UNITS,
    ...FREQUENCY_UNITS,
    ...RESOLUTION_UNITS,
    ...TIME_UNITS,
    ...LENGTH_UNITS,
];
