describe('MovieStar', function() {
  it('should have a title', function() {
    browser.get('http://localhost:8080/');

    it('should have a title', function () {
      expect(browser.getTitle()).toEqual('MovieStar');
    });

    if('should display movies', function () {
      expect(movies.length()).toEqual(12);

      expect(movies.get(0).getText()).toContain('Star Wars V');
    });
  });
});
