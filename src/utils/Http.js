export class Http {
  option = {
    header: {
      'Access-Control-Allow-Origin': '*',
      "Content-Type": "application/json;charset=utf-8"
    }
  };
  task;

  constructor(url) {
    this.option.url = url;
  }

  complete(complete) {
    this.option.complete = complete
  }

  get(data, success, fail) {
    this.option.method = 'GET'
    this.option.data = data
    this.option.success = success
    this.option.fail = fail
    this._send()
  }

  post(data, success, fail) {
    this.option.method = 'POST'
    this.option.data = data
    this.option.success = success
    this.option.fail = fail
    this._send()
  }

  put(data, success, fail) {
    this.option.method = 'PUT'
    this.option.data = data
    this.option.success = success
    this.option.fail = fail
    this._send()
  }

  patch(data, success, fail) {
    this.option.method = 'PATCH'
    this.option.data = data
    this.option.success = success
    this.option.fail = fail
    this._send()
  }

  delete(data, success, fail) {
    this.option.method = 'DELETE'
    this.option.data = data
    this.option.success = success
    this.option.fail = fail
    this._send()
  }

  /**
   * 发送请求
   * @private
   */
  _send() {
    this.task = uni.request(this.option)
  }

  /**
   * 中断请求
   */
  abort() {
    this.task.abort()
  }
}
