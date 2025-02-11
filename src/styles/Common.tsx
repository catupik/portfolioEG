import {theme} from "./Theme.tsx";

type FontPropsType = {
    family?: string
    weight?: number
    color?: string
    lineHeight?: string
    Fmin?: number
    Fmax?: number
}

export const font = ({ family, weight, color, lineHeight, Fmin, Fmax}: FontPropsType) => `
    font-family: ${family || "Open Sans"};
    font-weight: ${weight || 400};
    color: ${color || theme.colors.fontGrey};
    line-height: ${lineHeight || 1.2};
    font-size: calc(((100vw - 360px) / (1920 - 360)) * (${Fmax} - ${Fmin}) + ${Fmin}px);

`