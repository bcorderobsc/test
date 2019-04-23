/**
 *Utils module to handle all basics string operations
 * @author bcordero
 * @email bernangabriel@gmail.com
 * @repository https://github.com/bcorderobsc/test.git
 * @class Utils
 */
class Utils {
  /**
   *Convert an html to string
   *
   * @param {*} html
   * @returns
   */
  escape(html) {
    return JSON.stringify(html);
  }
}
