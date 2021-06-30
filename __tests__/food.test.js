'use strict';
const supergoose = require('@code-fellows/supergoose');
const { app } = require('../src/server');
const mockRequest = supergoose(app);



describe('API SERVER', () => {
  it('can create a new food', async () => {
    let foodObj = { name: 'test', cuisine: 'test' };
    const res = await mockRequest.post('/api/v1/food').send(foodObj);
    expect(res.body.name).toBe(foodObj.name);
    expect(res.body.cuisine).toBe(foodObj.cuisine);
  });


  // it('can get a food after creation', async () => {
  //   let foodObj = { name: 'test', cuisine: 'test' };
  //   const res = await mockRequest.get('/api/v1/food');
  //   expect(res.body.foodinsts[0].name).toBe(foodObj.name);
  //   expect(res.body.foodinsts[0].cuisine).toBe(foodObj.cuisine);
  //   id = res.body.foodinsts[0]._id;
  //   expect(res.body.foodinsts.length).toBe(1);
  //   expect(res.status).toBe(200)
  // });



});


