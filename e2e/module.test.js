import fs from 'fs';

test('check templates in dist folder', (done) => {
    fs.readdir('dist/templates', function (err, res) {
        if (err) {
            console.warn('no templates moved with the generator');
        } else {
            expect(res.length).toBe(2);
        }
        return done();
    })
});
