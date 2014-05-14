window.addEventListener('load', function() {
    FastClick.attach(document.body);
}, false);



// Filters 
Vue.filter('makeFloat', function (value) {
    return parseFloat(value).toFixed(2);
});

// Views (vue's)
var chkbk = new Vue({
    el: '#chkbk-app',
    data: {
        msg: 'Hello, foo',
        records: [
            { check_id: 123, image: '', date: '4/20/2014', note: 'Kroger', type: 0, amount: 124.22, balance: 435.87 },
            { check_id: null, image: '', date: '4/22/2014', note: 'Shell', type: 0, amount: 20.00, balance: 415.87 },
            { check_id: null, image: '', date: '4/20/2014', note: 'Water bill', type: 0, amount: 32.53, balance: 383.34 },
            { check_id: null, image: '', date: '4/20/2014', note: 'Deposit', type: 1, amount: 100.00, balance: 483.34 }
        ]
    },
    methods: {
        saveEntry: function (e) {

            var transaction_type = this.chkbk_type;
            var ttlEntries = this.records.length - 1;
            var prevBalance = this.records[ttlEntries].balance;

            if(transaction_type == 1){
                newBalance = (prevBalance + parseFloat(this.chkbk_amount));
                // console.log('deposit');
            }
            else{
                // console.log('debit');
                newBalance = (prevBalance - parseFloat(this.chkbk_amount));
            }

            this.records.push({
                check_id: this.chkbk_id, 
                date: this.chkbk_date,
                note: this.chkbk_note,
                type: this.chkbk_type,
                amount: this.chkbk_amount,
                balance: parseFloat(newBalance)
            });
            console.log('Saved ok!');
            this.chkbk_amount = "";
            this.chkbk_date = "";
            this.chkbk_type = 0;
            this.chkbk_note = "";
        }
    },

    
});