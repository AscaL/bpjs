import test from 'tape';
import request from 'supertest';

import app from '../src/app'

test('GET /', (t) => {
  request(app).get('/')
  .expect(200)
  .expect('Content-Type', /text\/html/)
  .end((err, res) =>{
    const expectedBody = 'Hello World!!';
    const actualBody = res.text;

    t.error(err, 'No error');
    t.equal(actualBody, expectedBody, 'Retrive body');
    t.end();
  });
});

test('404 on nonexistant URL', (t) => {
  request(app).get('/GETShouldFailOnRandomURL')
  .expect(404)
  .expect('Content-Type', /texte\/html/)
  .end((err, res) => {
    const expectedBody = 'Cannot GET /GETShouldFailOnRandomURL\n';
    const actualBody = res.text

    t.error(err, "No error");
    t.equal(actualBody, expectedBody, 'Retrieve Body');
    t.end();
  })
})
