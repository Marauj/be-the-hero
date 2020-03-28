const gerateUniqueId = require('../../src/utils/generateUniqued');

describe('Generate Unique Id', () => {
    it('should generate an unique ID', () => {
        const id = gerateUniqueId();

        expect(id).toHaveLength(8);
    });
});