describe('Enter in wikipedia from google.com', () => {
  it('Go from google to Wikipedia', () => {
    browser.url('https://www.google.com/');
    let input = $('.gLFyf');
    input.setValue('Wikipedia');
    browser.keys('Enter');
    let searchResult = $('.LC20lb');
    searchResult.click();
    browser.pause(3000);
    expect(browser).toHaveUrl('https://es.wikipedia.org/wiki/Wikipedia:Portada');
    expect(browser).toHaveTitle('Wikipedia, la enciclopedia libre');
  })
})
