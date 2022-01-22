/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
    docs: [

        'api/introduction/overview',
        'api/authorization/access_token',
        {
            type: 'category',
            label: 'לידים',
            collapsed: true,
            items: [
                'api/leads/create-lead',
                'api/leads/intelligent',
                'api/leads/lead-statuses',
            ],
        },
        {
            type: 'category',
            label: 'לקוחות',
            collapsed: true,
            items: [
                'api/accounts/create-account',
                'api/accounts/account-types',
                'api/accounts/account-statuses',
            ],
        },
        'api/search/accounts-leads',
        'api/notes/create-note',
        {
            type: 'category',
            label: 'משימות',
            collapsed: true,
            items: [
                'api/tasks/create-task',
                'api/tasks/task-statuses',
                'api/tasks/task-priorities',
            ],
        },
        {
            type: 'category',
            label: 'טיקטים',
            collapsed: true,
            items: [
                'api/tickets/create-ticket',
                'api/tickets/ticket-statuses',
                'api/tickets/ticket-priorities',
                'api/tickets/ticket-departments',
            ],
        },

        {
            type: 'category',
            label: 'מכירות',
            collapsed: true,
            items: [
                'api/sales/create-sale',
                'api/sales/sale-statuses',
            ],
        },
        {
            type: 'category',
            label: 'מוצרים',
            collapsed: true,
            items: [
                'api/products/categories/create-category',
                'api/products/create-product',
                'api/products/product-details',
                'api/products/delete-product',
                'api/products/inventory/inventory-movement',
            ],
        },
        {
            type: 'category',
            label: 'מסמכים דיגיטליים',
            collapsed: true,
            items: [
                'api/signatures/create-document',
                'api/signatures/documents-templates',
            ],
        },
        {
            type: 'category',
            label: 'טיימרים',
            collapsed: true,
            items: [
                'api/timers/create-timer',
                'api/timers/open-timers',
            ],
        },
        {
            type: 'category',
            label: 'SMS',
            collapsed: true,
            items: [
                'api/sms/send-sms',
                'api/sms/send-template',
                'api/sms/sms-templates',
            ],
        },
        'api/users/users-list',
        'api/links/shortner',
        {
            type: 'category',
            label: 'חישוב ימי עסקים',
            collapsed: true,
            items: [
                'api/working-days/add-working-days',
                'api/working-days/working-days-between',
                'api/working-days/add-week-days',
            ],
        },
        // {
        //     type: 'category',
        //     label: 'צעדים ראשוניים',
        //     collapsed: true,
        //     items: [
        //         'first-steps/views',
        //         'first-steps/home-page',
        //         'first-steps/search',
        //         'first-steps/support',
        //         'first-steps/templates',
        //     ],
        // },
        // {
        //     type: 'category',
        //     label: 'לידים',
        //     collapsed: true,
        //     items: [
        //         'leads/overview',
        //         {
        //             type: 'category',
        //             label: 'קליטה וייבוא לידים',
        //             collapsed: true,
        //             items: [
        //                 'leads/import-leads',
        //                 'leads/using-api',
        //             ],
        //         },
        //         'leads/new-lead',
        //         'leads/lead-source',
        //         'leads/lead-statuses',
        //         'leads/leads-not-relevant',
        //         'leads/assignments',
        //         'leads/fu',
        //         'leads/notes',
        //         'leads/history',
        //         'leads/duplicates',
        //         'leads/sla',
        //         'leads/call',
        //         'leads/converting',
        //         'leads/qa',
        //     ],
        // },
        // {
        //     type: 'category',
        //     label: 'לקוחות',
        //     collapsed: true,
        //     items: [
        //         'accounts/overview',
        //         'accounts/new-account',
        //         'accounts/import',
        //         'accounts/statuses',
        //         'accounts/types',
        //         'accounts/history',
        //         'accounts/birthday',
        //         'accounts/sync-greeninvoice',

        //     ],
        // },

    ],
    api: [
        'api/introduction/overview',
        'api/authorization/access_token',
        {
            type: 'category',
            label: 'לידים',
            collapsed: true,
            items: [
                'api/leads/create-lead',
                'api/leads/intelligent',
                'api/leads/lead-statuses',
            ],
        },
        {
            type: 'category',
            label: 'לקוחות',
            collapsed: true,
            items: [
                'api/accounts/create-account',
                'api/accounts/account-types',
                'api/accounts/account-statuses',
            ],
        },
        'api/search/accounts-leads',
        'api/notes/create-note',
        {
            type: 'category',
            label: 'משימות',
            collapsed: true,
            items: [
                'api/tasks/create-task',
                'api/tasks/task-statuses',
                'api/tasks/task-priorities',
            ],
        },
        {
            type: 'category',
            label: 'טיקטים',
            collapsed: true,
            items: [
                'api/tickets/create-ticket',
                'api/tickets/ticket-statuses',
                'api/tickets/ticket-priorities',
                'api/tickets/ticket-departments',
            ],
        },

        {
            type: 'category',
            label: 'מכירות',
            collapsed: true,
            items: [
                'api/sales/create-sale',
                'api/sales/sale-statuses',
            ],
        },
        {
            type: 'category',
            label: 'מוצרים',
            collapsed: true,
            items: [
                'api/products/categories/create-category',
                'api/products/create-product',
                'api/products/product-details',
                'api/products/delete-product',
                'api/products/inventory/inventory-movement',
            ],
        },
        {
            type: 'category',
            label: 'מסמכים דיגיטליים',
            collapsed: true,
            items: [
                'api/signatures/create-document',
                'api/signatures/documents-templates',
            ],
        },
        {
            type: 'category',
            label: 'טיימרים',
            collapsed: true,
            items: [
                'api/timers/create-timer',
                'api/timers/open-timers',
            ],
        },
        {
            type: 'category',
            label: 'SMS',
            collapsed: true,
            items: [
                'api/sms/send-sms',
                'api/sms/send-template',
                'api/sms/sms-templates',
            ],
        },
        'api/users/users-list',
        'api/links/shortner',
        {
            type: 'category',
            label: 'חישוב ימי עסקים',
            collapsed: true,
            items: [
                'api/working-days/add-working-days',
                'api/working-days/working-days-between',
                'api/working-days/add-week-days',
            ],
        },
    ],


    // By default, Docusaurus generates a sidebar from the docs folder structure
    // tutorialSidebar: [{ type: 'autogenerated', dirName: '.' }],
    tutorialSidebar: {
        'Category A': ['intro', 'comapny/privacy-policy', 'intro'],
    },
    apiSidebar: ['intro', 'comapny/privacy-policy'],
    // But you can create a sidebar manually
    /*
    tutorialSidebar: [
      {
        type: 'category',
        label: 'Tutorial',
        items: ['hello'],
      },
    ],
     */
};