// custom Vtype for vtype:'time'
Ext.define('Alegra.form.field.VTypes', {
    override: 'Ext.form.field.VTypes',

    // vtype validation function
    phone: function(value) {
        return this.phoneRe.test(value);
    },
    // RegExp for the value to be tested against within the validation function
    phoneRe: /^[0-9]{6,45}$/i,
    // vtype Text property: The error text to display when the validation function returns false
    phoneText: 'Not a valid phone number.',
    // vtype Mask property: The keystroke filter mask
    phoneMask: /[\d-]/
});
