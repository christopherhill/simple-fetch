import chai, { expect } from 'chai';
import spies from 'chai-spies';
import chaiHttp from 'chai-http';
import nodeHttp from 'http';
import mockserver from 'mockserver';
import Http from './../src/http';

chai.use(spies);

nodeHttp.createServer(mockserver('./server')).listen(9001);

describe('http tests', () => {

    let http;

    beforeEach(() => {
      http = new Http('http://localhost:9001', { 'Authorization': 'Bearer 1234' });
    });

    it('should have some default headers set', () => {
      expect(http.headers.get('Content-Type')).to.equal('application/json');
    });

    it('should have additional headers supplied by user set', () => {
      expect(http.headers.get('Authorization')).to.equal('Bearer 1234');
    });

    it('should have GET, POST, PUT, PATCH, DELETE methods exposed', () => {
      const arr = ['get', 'post', 'put', 'patch', 'del'];
      arr.forEach(method => {
        expect(http[method] instanceof Function).to.equal(true);
      })
    });

    it('should create merged options', () => {
      const newOptions = { 'someOption' : 'thisOption' };
      const result = http.mergeOptions(newOptions);
      expect(result.someOption).to.equal('thisOption');
    })

    it('should have the endpoint that was set initially', () => {
      expect(http.getConfiguration().endpoint).to.equal('http://localhost:9001');
    })

    it('should strip a trailing slash if necessary from the endpoint', () => {
      global.window = { location: { origin: 'http://www.someurl.com/' }};
      let http = new Http(null, { 'Authorization': 'Bearer 1234' });
      expect(http.getConfiguration().endpoint).to.equal('http://www.someurl.com');
    })

    it('should use the current window.location.origin if no endpoint is supplied', () => {
      global.window = { location: { origin: 'http://www.someurl.com' }};
      let http = new Http(null, { 'Authorization': 'Bearer 1234' });
      expect(http.getConfiguration().endpoint).to.equal('http://www.someurl.com');
    });

    it('should make a GET successfully', (done) => {
      const req = http.get('/users').exec().then((res) => {
        expect(res.raw.status).to.equal(200);
        expect(res.data).to.eql({ success: true, random: 'content' });
        done();
      })
    })

    it('should cancel a GET', (done) => {
      const req = http.get('/users');
      req.exec().then(() => {
        expect(req.controller.signal.aborted).to.equal(false);
        req.controller.abort();
        expect(req.controller.signal.aborted).to.equal(true);
        done();
      });
    });

    it('should make a POST successfully', (done) => {
      const req = http.post('/users').exec().then((res) => {
        expect(res.raw.status).to.equal(200);
        expect(res.data).to.eql({ success: true, random: 'content' });
        done();
      })
    })

    it('should cancel a POST', (done) => {
      const req = http.post('/users');
      req.exec().then(() => {
        expect(req.controller.signal.aborted).to.equal(false);
        req.controller.abort();
        expect(req.controller.signal.aborted).to.equal(true);
        done();
      });
    })

    it('should make a PUT successfully', (done) => {
      const req = http.put('/users').exec().then((res) => {
        expect(res.raw.status).to.equal(200);
        expect(res.data).to.eql({ success: true, random: 'content' });
        done();
      })
    })

    it('should cancel a PUT', (done) => {
      const req = http.put('/users');
      req.exec().then(() => {
        expect(req.controller.signal.aborted).to.equal(false);
        req.controller.abort();
        expect(req.controller.signal.aborted).to.equal(true);
        done();
      });
    })

    it('should make a PATCH successfully', (done) => {
      const req = http.patch('/users').exec().then((res) => {
        expect(res.raw.status).to.equal(200);
        expect(res.data).to.eql({ success: true, random: 'content' });
        done();
      })
    })

    it('should cancel a PATCH', (done) => {
      const req = http.patch('/users');
      req.exec().then(() => {
        expect(req.controller.signal.aborted).to.equal(false);
        req.controller.abort();
        expect(req.controller.signal.aborted).to.equal(true);
        done();
      });
    })

    it('should make a DELETE successfully', (done) => {
      const req = http.del('/users').exec().then((res) => {
        expect(res.raw.status).to.equal(200);
        done();
      })
    })

    it('should cancel a DELETE', (done) => {
      const req = http.del('/users');
      req.exec().then(() => {
        expect(req.controller.signal.aborted).to.equal(false);
        req.controller.abort();
        expect(req.controller.signal.aborted).to.equal(true);
        done();
      });
    })

})
