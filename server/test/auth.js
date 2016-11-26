import test from 'tape';
import request from 'supertest';

import {thinky, r} from '../src/db';
import app from '../src/app';

thinky.dbReady().then(() => {
  test('Should register with given username and passwords', (t) => {
    request(app)
      .post('/api/register')
      .send({login: 'test', password: '123', passwordRepeat: '123'})
      .expect(201)
      .end((err, res) => {

        t.error(err, 'No error');
        t.end();
      });
  });


  test('Should fail to register with missmatching passwords', (t) => {
    request(app)
      .post('/api/register')
      .send({login: 'test', password: '123', passwordRepeat: "312"})
      .expect(400)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        const expectedBody = {error: 'Passwords do not match!'};
        const actualBody = res.body;

        t.error(err, 'No error');
        t.deepEqual(actualBody, expectedBody, 'Retrive body');
        t.end();
      });
  });

  test((t) => {
    r.getPoolMaster().drain();
    t.end()
  })
});
