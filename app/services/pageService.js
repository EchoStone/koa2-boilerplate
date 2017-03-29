// We are exporting the methods so they can be tested
// with mock dependencies.

export default class PageService {

  constructor({ page }) {
    // Sequelize Attributes
    this.pageFields = ['id', 'content', 'slideId', 'sequence'];

    this.page = page;
  }

  async getSlidePages(slideId) {
    const pages = await this.page.findAll({
      attributes: this.pageFields,
      where: {
        slideId,
      },
      order: [['sequence', 'DESC']],
    });

    if (pages && pages.length > 0) {
      return pages.map(item => item.toJSON());
    }

    return null;
  }
}
