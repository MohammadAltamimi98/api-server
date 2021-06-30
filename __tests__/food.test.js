'use strict';
const supergoose = require('@code-fellows/supergoose');
const { app } = require('../server');
const mockRequest = supergoose(app);

describe('API SERVER', () => {
  it('can create a new food', async () => {
    let foodObj = { name: 'test', cuisine: 'test' };
    const res = await mockRequest.post('/api/v1/food').send(foodObj);
    expect(res.body.name).toBe(foodObj.name);
    expect(res.body.cuisine).toBe(foodObj.cuisine);
  });
  it('can get a food after creation', async () => {
    let foodObj = { name: 'test', role: 'test' };
    const res = await mockRequest.get('/api/v1/person');
    expect(res.body.foods[0].name).toBe(foodObj.name);
    expect(res.body.foods[0].cuisine).toBe(foodObj.cuisine);
    expect(res.body.foods.length).toBe(1);
  });
});