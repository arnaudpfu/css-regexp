import { CSS_COLORS } from "./css-colors";
import { CSS_UNITS } from "./css-units";

interface RegexpSelectors {
    color: {
        rgba: string;
        hexa: string;
        hsla: string;
        text: string;
        all: string;
    },
    numeric: string;
}

const DEFAULT_CSS_VALUES = ['inherit', 'initial', 'unset'];
const COLOR_RGBA = "rgba?\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)\\s*(?:,\\s*(\\d+(?:\\.\\d+)?)\\s*)?\\)";
const COLOR_HEXA = "#([\\da-f]{3}){1,2}|#([\\da-f]{4}){1,2}";
const COLOR_HSLA = "hsla?\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)\\s*(?:,\\s*(\\d+(?:\\.\\d+)?)\\s*)?\\)";

export const REGEXP_SELECTORS: RegexpSelectors = {
    color: {
        rgba: COLOR_RGBA,
        hexa: COLOR_HEXA,
        hsla: COLOR_HSLA,
        text: CSS_COLORS.join('|'),
        all: `${COLOR_RGBA}|${COLOR_HEXA}|${COLOR_HSLA}|${CSS_COLORS.join('|')}`
    },
    numeric: `[0-9]+(?:.[0-9]+)?(${CSS_UNITS.join('|')})?`
}
