const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');
const { buildSchema } = require('graphql');
const { readFileSync } = require('fs');


const schemaString = readFileSync('./schema.graphql', { encoding: 'utf8' });

const schema = buildSchema(schemaString);

const formTableConfig = {

	columns: [
		{
			name: 'id',
			label: 'ID',
		},
		{
			name: 'registrationDate',
			label: 'Registration Date',
		},
		{
			name: 'login',
			label: 'Login',
		},
		{
			name: 'managerName',
			label: 'Project',
		},
		{
			name: 'status',
			label: 'Status',
		},
	],
};

const formTable = {
	rows: [
		{
			id: 1,
			parentId: 0,
			cells: [
				{
					name: 'id',
					value: 1
				},
				{
					name: 'registrationDate',
					value: '2000-05-01'
				},
				{
					name: 'login',
					value: 'jaguar@cats.local'
				},
				{
					name: 'managerName',
					value: 'Cat'
				},
				{
					name: 'status',
					value: 'paid'
				},

			],
		},
		{
			id: 2,
			parentId: 1,
			cells: [
				{
					name: 'id',
					value: 2
				},
				{
					name: 'registrationDate',
					value: '2000-05-02'
				},
				{
					name: 'login',
					value: 'cougar@cats.local'
				},
				{
					name: 'managerName',
					value: 'Cat'
				},
				{
					name: 'status',
					value: 'paid'
				},

			],
		},
		{
			id: 3,
			parentId: 1,
			cells: [
				{
					name: 'id',
					value: 3
				},
				{
					name: 'registrationDate',
					value: '2000-05-03'
				},
				{
					name: 'login',
					value: 'lynx@cats.local'
				},
				{
					name: 'managerName',
					value: 'Cat'
				},
				{
					name: 'status',
					value: 'panding'
				},

			],
		},
		{
			id: 4,
			parentId: 1,
			cells: [
				{
					name: 'id',
					value: 4
				},
				{
					name: 'registrationDate',
					value: '2002-05-03'
				},
				{
					name: 'login',
					value: 'cheetah@cats.local'
				},
				{
					name: 'managerName',
					value: 'Cat'
				},
				{
					name: 'status',
					value: 'panding'
				},

			],
		},
		{
			id: 5,
			parentId: 0,
			cells: [
				{
					name: 'id',
					value: 5
				},
				{
					name: 'registrationDate',
					value: '2012-05-03'
				},
				{
					name: 'login',
					value: 'tiger@cats.local'
				},
				{
					name: 'managerName',
					value: 'Tiget'
				},
				{
					name: 'status',
					value: 'paid'
				},

			],
		},
		{
			id: 6,
			parentId: 0,
			cells: [
				{
					name: 'id',
					value: 6
				},
				{
					name: 'registrationDate',
					value: '2008-04-03'
				},
				{
					name: 'login',
					value: 'wildcat@cats.local'
				},
				{
					name: 'managerName',
					value: 'House Cats'
				},
				{
					name: 'status',
					value: 'paid'
				},

			],
		},
		{
			id: 7,
			parentId: 6,
			cells: [
				{
					name: 'id',
					value: 7
				},
				{
					name: 'registrationDate',
					value: '2008-04-03'
				},
				{
					name: 'login',
					value: 'exotic@cats.local'
				},
				{
					name: 'managerName',
					value: 'House Cats'
				},
				{
					name: 'status',
					value: 'paid'
				},

			],
		},
		{
			id: 8,
			parentId: 6,
			cells: [
				{
					name: 'id',
					value: 8
				},
				{
					name: 'registrationDate',
					value: '2010-04-03'
				},
				{
					name: 'login',
					value: 'siamese@cats.local'
				},
				{
					name: 'managerName',
					value: 'House Cats'
				},
				{
					name: 'status',
					value: 'panding'
				},

			],
		},
		{
			id: 9,
			parentId: 8,
			cells: [
				{
					name: 'id',
					value: 9
				},
				{
					name: 'registrationDate',
					value: '2010-04-03'
				},
				{
					name: 'login',
					value: 'bluecat@cats.local'
				},
				{
					name: 'managerName',
					value: 'House Cats'
				},
				{
					name: 'status',
					value: 'panding'
				},

			],
		},
		{
			id: 10,
			parentId: 8,
			cells: [
				{
					name: 'id',
					value: 10
				},
				{
					name: 'registrationDate',
					value: '2010-04-03'
				},
				{
					name: 'login',
					value: 'sphynx@cats.local'
				},
				{
					name: 'managerName',
					value: 'House Cats'
				},
				{
					name: 'status',
					value: 'paid'
				},

			],
		},
		{
			id: 11,
			parentId: 0,
			cells: [
				{
					name: 'id',
					value: 11
				},
				{
					name: 'registrationDate',
					value: '2011-04-03'
				},
				{
					name: 'login',
					value: 'irish@cats.local'
				},
				{
					name: 'managerName',
					value: 'Domestic Dogs'
				},
				{
					name: 'status',
					value: 'paid'
				},

			],
		},
		{
			id: 12,
			parentId: 11,
			cells: [
				{
					name: 'id',
					value: 12
				},
				{
					name: 'registrationDate',
					value: '2011-04-03'
				},
				{
					name: 'login',
					value: 'english@cats.local'
				},
				{
					name: 'managerName',
					value: 'Domestic Dogs'
				},
				{
					name: 'status',
					value: 'paid'
				},

			],
		},
		{
			id: 13,
			parentId: 0,
			cells: [
				{
					name: 'id',
					value: 13
				},
				{
					name: 'registrationDate',
					value: '2011-04-03'
				},
				{
					name: 'login',
					value: 'redfox@cats.local'
				},
				{
					name: 'managerName',
					value: 'Small Dogs Dogs'
				},
				{
					name: 'status',
					value: 'paid'
				},

			],
		},
		
		
	],
	total: 100
}


const root = {

	getAffiliatesConfig: () => {
		return formTableConfig;
	},
	
	getAffiliatesTableData: (params) => {
		if (params.paginationInput.offset > 1) {
			return formTablePage;
		}
		const table = {...formTable};
		table.rows = table.rows.slice(0, params.paginationInput.limit);
		return table;
	},
};

const app = express();

const whitelist = ['192.168.0.', 'localhost', '127.0.0.']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
}

app.use(cors());
app.options('*', cors(corsOptions));

app.use(
	'/graphql',
	graphqlHTTP({
		schema: schema,
		rootValue: root,
		graphiql: true
	})
);

app.listen(6006);

console.log('Running a GraphQL API server at http://localhost:6006/graphql');
