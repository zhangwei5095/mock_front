import Vue from 'vue'

// Api
exports.getApi = function (id) {
	return Vue.http.get('http://localhost:3000/api/' + id + '/getApi')
}

exports.addApi = function (api) {
	return Vue.http.post('http://localhost:3000/api/addApi', api)
}

exports.deleteApi = function (id) {
	return Vue.http.delete('http://localhost:3000/api/' + id)
}

exports.updateApi = function (api) {
	return Vue.http.put('http://localhost:3000/api/' + api._id + '/updateApi', api)
}

exports.getApiList = function (id) {
	return Vue.http.get(`http://localhost:3000/api/getApiListByCategoryId?categoryId=${id}`)
}

// Category
exports.getCategory = function (id) {
	return Vue.http.get('http://localhost:3000/category/' + id + '/getCategory')
}

exports.addCategory = function (options) {
	return Vue.http.post('http://localhost:3000/category/addCategory', options)
}

exports.deleteCategory = function (id) {
	return Vue.http.delete('http://localhost:3000/category/' + id)
}

exports.updateCategory = function (id, category) {
	return Vue.http.put('http://localhost:3000/category/' + category._id + '/updateCategory', category)
}

exports.getCategoryList = function (page) {
	return Vue.http.get(`http://localhost:3000/category/getCategoryList?itemsPerPage=20&currentPage=${page}`)
}

// test
exports.testApi = function (path) {
	return Vue.http.get(`http://localhost:4000${path}`)
}