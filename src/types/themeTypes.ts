interface IColors {
  black: string; // main text, active icon state
  grey: string; // secondary text, default icon state
  greyGainsboro: string; // disabled icons, empty states, self messages background
  greyWhisper: string; // borders
  whiteSmoke: string; // login text input background, section
  whiteSnow: string; // app background
  white: string; // button text, top/bottom bars background, items background
  blueAlice: string; // message link card background

  // *** Accents ***
  accentBlue: string; // selected icon state, CTA bg, links
  accentRed: string; // error text, notification badge bg
  accentGreen: string; // online status

  // *** Specials ***
  bgGradient: string; // gradient background
  overlay: string; // overlay color
  overlayDark: string; // dark overlay color
  buttonBackground: string; // button background color

  // *** Effects ***
  blur: string; // blur effect color
}

export type TypeTheme = {colors: IColors};
