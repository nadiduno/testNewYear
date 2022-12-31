const NewYear =require('../main');
describe('Test New Year', () => {
    it('Should init whith correct parameters', () => {
        const newYear = new NewYear('Happy');
        expect(newYear.state).toEqual('Happy');
    })
})
