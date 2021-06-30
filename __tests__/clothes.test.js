'use strict';
const supergoose = require('@code-fellows/supergoose');
const { app } = require('../src/server');
const mockRequest = supergoose(app);



describe('API SERVER', () => {
  it('can create a new clothes', async () => {
    let clothesObj = { name: 'test', brand: 'test' };
    const res = await mockRequest.post('/api/v1/clothes').send(clothesObj);
    expect(res.body.name).toBe(clothesObj.name);
    expect(res.body.brand).toBe(clothesObj.brand);
  });





});

