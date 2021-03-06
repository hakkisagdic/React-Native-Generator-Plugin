const {
  convertFontFamilyAttribute,
  convertFontStyleAttribute,
  convertFontSizeAttribute,
  convertCharSpacingAttribute,
  convertUnderlineAttribute,
  convertStrikethroughAttribute,
  convertTextTransformAttribute,
  convertTextScriptAttribute,
  convertTextAlignAttribute
} = require("./converters");
const { representColor } = require("../../helpers/representColor");

/**
 * generates style for text element
 * @param {*} textElement an instance of Text
 * @returns style object
 */
function generateTextStyles(textElement) {
  // TODO: handle color with stroke

  const {
    strokeEnabled,
    stroke,
    fillEnabled,
    fill,
    fontFamily,
    fontStyle,
    fontSize,
    charSpacing,
    underline,
    strikethrough,
    textTransform,
    textScript,
    textAlign
  } = textElement;

  const style = {
    ...convertFontFamilyAttribute(fontFamily),
    ...convertFontStyleAttribute(fontStyle),
    ...convertFontSizeAttribute(fontSize),
    ...convertCharSpacingAttribute(charSpacing),
    ...convertUnderlineAttribute(underline),
    ...convertStrikethroughAttribute(strikethrough),
    ...convertTextTransformAttribute(textTransform),
    ...convertTextScriptAttribute(textScript),
    ...convertTextAlignAttribute(textAlign)
  };

  if (fillEnabled || strokeEnabled) {
    style.color = fillEnabled ? representColor(fill) : representColor(stroke);
  }

  return style;
}

module.exports = {
  generateTextStyles
};
