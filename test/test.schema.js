const chai = require('chai');
const chaiSchema = require('chai-json-schema');

//  Tell Chai about our JSON schema
chai.use(chaiSchema);

describe('plugins.json', () => {
    it('matches the specified JSON Schema', () => {
        chai.expect(require('../plugins.json')).to.be.jsonSchema(require('../schema.json')); // eslint-disable-line global-require
    });
});
