const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');
const { buildSchema } = require('graphql');
const { readFileSync } = require('fs');


const schemaString = readFileSync('./schema.graphql', { encoding: 'utf8' });

const schema = buildSchema(schemaString);

const formTableConfig = {
	fields: [
		{
			name: 'affiliateId',
			label: 'Affiliate Id'
		},
		{
			name: 'status',
            label: 'Status',
			values: [
				{
					value: 1,
					text: 'Active'
				},
				{
					value: 2,
					text: 'Inactive'
				}
			],
			defaultEmpty: true
		},
		{
			name: 'company',
            label: 'Company',
		},
		{
			name: 'country',
            label: 'Country',
			values: [
				{
					value: 1,
					text: 'Spain'
				},
				{
					value: 2,
					text: 'Italy'
				},
				{
					value: 3,
					text: 'Germany'
				},
				{
					value: 4,
					text: 'Mexica'
				}
			],
		},
		{
			name: 'username',
            label: 'Username',
		},
		{
			name: 'manager',
            label: 'Manager',
			values: [
				{
					value: 1,
					text: 'John Kimp'
				},
				{
					value: 2,
					text: 'Italy Madrid'
				},
				{
					value: 3,
					text: 'Kim Clark'
				}
			],
		},
		{
			name: 'website',
            label: 'Website',
		},
	],
	columns: [
		{
			name: 'id',
			label: 'ID',
			sortable: true,
			input: {
				type: 'checkbox'
			}
		},
		{
			name: 'registrationDate',
			label: 'Registration Date',
			sortable: false,
			input: {
				type: 'checkbox'
			}
		},
		{
			name: 'login',
			label: 'Login',
			sortable: true,
			input: {
				type: 'checkbox'
			}
		},
		{
			name: 'managerName',
			label: 'Manager Name',
			sortable: false,
			input: {
				type: 'checkbox'
			}
		},
		{
			name: 'status',
			label: 'Status',
			sortable: false
		},
		{
			name: 'country',
			label: 'Country',
			sortable: true,
			input: {
				type: 'checkbox'
			}
		},
		{
			name: 'website',
			label: 'URL',
			sortable: false,
			input: {
				type: 'checkbox'
			}
		},
		
	],
	groupRows: true,
	sortBy: 'id',
	direction: 1,
	exportUrl: '/users/export',
	options: [
		{
			key: 'edit',
			value: true
		},
        {
            key: 'copy',
            value: true
        },
        {
            key: 'become',
            value: true
        }
    ]
};

const formTable = {
	rows: [
		{
			id: 1653,
			parentId: 0,
			cells: [
				{
					name: 'id',
					value: 1653
				},
				{
					name: 'registrationDate',
					value: '2000-05-01 23:10:05'
				},
				{
					name: 'login',
					value: 'partnersathere@affiliate.local'
				},
				{
					name: 'managerName',
					value: 'John Coffee1'
				},

			],

		},
		{
			id: 1853,
			parentId: 0,
			cells: [
				{
					name: 'id',
					value: 1853
				},
				{
					name: 'registrationDate',
					value: '2015-05-01 23:10:05'
				},
				{
					name: 'login',
					value: 'partnersathere@affiliate.local'
				},
				{
					name: 'managerName',
					value: 'John Coffee2'
				},
				
			],
		
		},
		{
			id: 1954,
			parentId: 1853,
			cells: [
				{
					name: 'id',
					value: 1954
				},
				{
					name: 'registrationDate',
					value: '2016-06-01 23:10:05'
				},
				{
					name: 'login',
					value: 'partnersathere@affiliate.local'
				},
				{
					name: 'managerName',
					value: 'Ket Strong'
				},
				
			],
		
		},
		{
			id: 2855,
			parentId: 1853,
			cells: [
				{
					name: 'id',
					value: 2855
				},
				{
					name: 'registrationDate',
					value: '2019-06-01 03:10:05'
				},
				{
					name: 'login',
					value: 'partnersathere@affiliate.local'
				},
				{
					name: 'managerName',
					value: 'Sandy Grid'
				},
				
			],
		
		},
		{
			id: 1856,
			parentId: 2855,
			cells: [
				{
					name: 'id',
					value: 2676
				},
				{
					name: 'registrationDate',
					value: '2015-05-01 23:10:05'
				},
				{
					name: 'login',
					value: 'partnersathere@affiliate.local'
				},
				{
					name: 'managerName',
					value: 'John Coffee'
				},
				
			],
		
		},
		{
			id: 1857,
			parentId: 1653,
			cells: [
				{
					name: 'id',
					value: 1651
				},
				{
					name: 'registrationDate',
					value: '2016-06-01 23:10:05'
				},
				{
					name: 'login',
					value: 'partnersathere@affiliate.local'
				},
				{
					name: 'managerName',
					value: 'Ket Strong1'
				},
				
			],
		
		},
		{
			id: 1859,
			parentId: 2855,
			cells: [
				{
					name: 'id',
					value: 1652
				},
				{
					name: 'registrationDate',
					value: '2019-06-01 03:10:05'
				},
				{
					name: 'login',
					value: 'partnersathere@affiliate.local'
				},
				{
					name: 'managerName',
					value: 'Sandy Grid'
				},
				
			],
		
		},
		{
			id: 1860,
			parentId: 2855,
			cells: [
				{
					name: 'id',
					value: 1653
				},
				{
					name: 'registrationDate',
					value: '2015-05-01 23:10:05'
				},
				{
					name: 'login',
					value: 'partnersathere@affiliate.local'
				},
				{
					name: 'managerName',
					value: 'John Coffee'
				},
				
			],
		
		},
		{
			id: 1861,
			parentId: 0,
			cells: [
				{
					name: 'id',
					value: 1651
				},
				{
					name: 'registrationDate',
					value: '2016-06-01 23:10:05'
				},
				{
					name: 'login',
					value: 'partnersathere@affiliate.local'
				},
				{
					name: 'managerName',
					value: 'Ket Strong'
				},
				
			],
		
		},
		{
			id: 1862,
			parentId: 0,
			cells: [
				{
					name: 'id',
					value: 1652
				},
				{
					name: 'registrationDate',
					value: '2019-06-01 03:10:05'
				},
				{
					name: 'login',
					value: 'partnersathere@affiliate.local'
				},
				{
					name: 'managerName',
					value: 'Sandy Grid'
				},
				
			],
		
		},
		{
			id: 1863,
			parentId: 0,
			cells: [
				{
					name: 'id',
					value: 1653
				},
				{
					name: 'registrationDate',
					value: '2015-05-01 23:10:05'
				},
				{
					name: 'login',
					value: 'partnersathere@affiliate.local'
				},
				{
					name: 'managerName',
					value: 'John Coffee'
				},
				
			],
		
		},
		{
			id: 1864,
			parentId: 0,
			cells: [
				{
					name: 'id',
					value: 1651
				},
				{
					name: 'registrationDate',
					value: '2016-06-01 23:10:05'
				},
				{
					name: 'login',
					value: 'partnersathere@affiliate.local'
				},
				{
					name: 'managerName',
					value: 'Ket Strong'
				},
				
			],
		
		},
		{
			id: 1865,
			parentId: 0,
			cells: [
				{
					name: 'id',
					value: 1652
				},
				{
					name: 'registrationDate',
					value: '2019-06-01 03:10:05'
				},
				{
					name: 'login',
					value: 'partnersathere@affiliate.local'
				},
				{
					name: 'managerName',
					value: 'Sandy Grid'
				},
				
			],
		
		},
		{
			id: 1866,
			parentId: 0,
			cells: [
				{
					name: 'id',
					value: 1653
				},
				{
					name: 'registrationDate',
					value: '2015-05-01 23:10:05'
				},
				{
					name: 'login',
					value: 'partnersathere@affiliate.local'
				},
				{
					name: 'managerName',
					value: 'John Coffee'
				},
				
			],
		
		},
		{
			id: 1867,
			parentId: 1,
			cells: [
				{
					name: 'id',
					value: 2101
				},
				{
					name: 'registrationDate',
					value: '2016-06-01 23:10:05'
				},
				{
					name: 'login',
					value: 'partnersathere@affiliate.local'
				},
				{
					name: 'managerName',
					value: 'Ket Strong'
				},
				
			],
		
		},
		{
			id: 1868,
			parentId: 0,
			cells: [
				{
					name: 'id',
					value: 1652
				},
				{
					name: 'registrationDate',
					value: '2019-06-01 03:10:05'
				},
				{
					name: 'login',
					value: 'partnersathere@affiliate.local'
				},
				{
					name: 'managerName',
					value: 'Sandy Grid'
				},
				
			],
		
		},
		{
			id: 1869,
			parentId: 0,
			cells: [
				{
					name: 'id',
					value: 1653
				},
				{
					name: 'registrationDate',
					value: '2015-05-01 23:10:05'
				},
				{
					name: 'login',
					value: 'partnersathere@affiliate.local'
				},
				{
					name: 'managerName',
					value: 'John Coffee'
				},
				
			],
		
		},
		{
			id: 1870,
			parentId: 0,
			cells: [
				{
					name: 'id',
					value: 1651
				},
				{
					name: 'registrationDate',
					value: '2016-06-01 23:10:05'
				},
				{
					name: 'login',
					value: 'partnersathere@affiliate.local'
				},
				{
					name: 'managerName',
					value: 'Ket Strong'
				},
				
			],
		
		},
		{
			id: 1871,
			parentId: 0,
			cells: [
				{
					name: 'id',
					value: 1652
				},
				{
					name: 'registrationDate',
					value: '2019-06-01 03:10:05'
				},
				{
					name: 'login',
					value: 'partnersathere@affiliate.local'
				},
				{
					name: 'managerName',
					value: 'Sandy Grid'
				},
				
			],
		
		},
		{
			id: 1872,
			parentId: 0,
			cells: [
				{
					name: 'id',
					value: 1653
				},
				{
					name: 'registrationDate',
					value: '2015-05-01 23:10:05'
				},
				{
					name: 'login',
					value: 'partnersathere@affiliate.local'
				},
				{
					name: 'managerName',
					value: 'John Coffee'
				},
				
			],
		
		},
		{
			id: 1873,
			parentId: 0,
			cells: [
				{
					name: 'id',
					value: 1651
				},
				{
					name: 'registrationDate',
					value: '2016-06-01 23:10:05'
				},
				{
					name: 'login',
					value: 'partnersathere@affiliate.local'
				},
				{
					name: 'managerName',
					value: 'Ket Strong'
				},
				
			],
		
		},
		{
			id: 1874,
			parentId: 0,
			cells: [
				{
					name: 'id',
					value: 1652
				},
				{
					name: 'registrationDate',
					value: '2019-06-01 03:10:05'
				},
				{
					name: 'login',
					value: 'partnersathere@affiliate.local'
				},
				{
					name: 'managerName',
					value: 'Sandy Grid'
				},
				
			],
		
		},
		{
			id: 1875,
			parentId: 0,
			cells: [
				{
					name: 'id',
					value: 1653
				},
				{
					name: 'registrationDate',
					value: '2015-05-01 23:10:05'
				},
				{
					name: 'login',
					value: 'partnersathere@affiliate.local'
				},
				{
					name: 'managerName',
					value: 'John Coffee'
				},
				
			],
		
		},
		{
			id: 1876,
			parentId: 0,
			cells: [
				{
					name: 'id',
					value: 1651
				},
				{
					name: 'registrationDate',
					value: '2016-06-01 23:10:05'
				},
				{
					name: 'login',
					value: 'partnersathere@affiliate.local'
				},
				{
					name: 'managerName',
					value: 'Ket Strong'
				},
				
			],
		
		},
		{
			id: 1877,
			parentId: 0,
			cells: [
				{
					name: 'id',
					value: 1652
				},
				{
					name: 'registrationDate',
					value: '2019-06-01 03:10:05'
				},
				{
					name: 'login',
					value: 'partnersathere@affiliate.local'
				},
				{
					name: 'managerName',
					value: 'Sandy Grid'
				},
				
			],
		
		},
		{
			id: 1878,
			parentId: 0,
			cells: [
				{
					name: 'id',
					value: 1653
				},
				{
					name: 'registrationDate',
					value: '2015-05-01 23:10:05'
				},
				{
					name: 'login',
					value: 'partnersathere@affiliate.local'
				},
				{
					name: 'managerName',
					value: 'John Coffee'
				},
				
			],
		
		},
		{
			id: 1879,
			parentId: 0,
			cells: [
				{
					name: 'id',
					value: 1651
				},
				{
					name: 'registrationDate',
					value: '2016-06-01 23:10:05'
				},
				{
					name: 'login',
					value: 'partnersathere@affiliate.local'
				},
				{
					name: 'managerName',
					value: 'Ket Strong'
				},
				
			],
		
		},
		{
			id: 1880,
			parentId: 0,
			cells: [
				{
					name: 'id',
					value: 1652
				},
				{
					name: 'registrationDate',
					value: '2019-06-01 03:10:05'
				},
				{
					name: 'login',
					value: 'partnersathere@affiliate.local'
				},
				{
					name: 'managerName',
					value: 'Sandy Grid'
				},
				
			],
		
		},
	],
	total: 100
}

const formTablePage2 = {
	rows: [
			{
				cells: [
					{
						name: 'id',
						value: 3652
					},
					{
						name: 'registrationDate',
						value: '2020-06-01 03:10:05'
					},
					{
						name: 'login',
						value: 'page2@affiliate.local'
					},
					{
						name: 'managerName',
						value: 'Sass'
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
			return formTablePage2;
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
