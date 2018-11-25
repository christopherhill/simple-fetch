import chai, { expect } from 'chai';
import spies from 'chai-spies';
import chaiHttp from 'chai-http';
import nodeHttp from 'http';
import mockserver from 'mockserver';
import Http from './../src/http';

chai.use(spies);

nodeHttp.createServer(mockserver('./../server/get.mock')).listen(9001);

describe('http tests', () => {

    let http;

    beforeEach(() => {
      http = new Http('//localhost:9001', { 'Authorization': 'Bearer 1234' });
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
      expect(http.getConfiguration().endpoint).to.equal('//localhost:9001');
    })

    it('should make a GET successfully', () => {
      const req = http.get('get').exec.then((data) => {
        expect(data).to.equal({ success: true, random: 'content' });
      })
    })

    it('should cancel a GET', () => {
      const req = http.get('get');
      req.exec;
      expect(req.controller.signal.aborted).to.equal(false);
      req.controller.abort();
      expect(req.controller.signal.aborted).to.equal(true);
    })

    
})
