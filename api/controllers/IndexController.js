module.exports = {
	index: function (req, res) {
		res.view('index', {
			layout: 'layouts/layout',   
			NODE_ENV: process.env['NODE_ENV']
        });
	}
};
