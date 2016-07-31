Ext.define('Ext.form.field.Search', {
  extend: 'Ext.form.field.Text',
  alias: 'widget.searchfield',
  ui: 'search',
  inputType: 'search',

  triggers: {
    find: {
      handler: function() {
        this.doSearch();
      }
    }
  },

  initComponent: function() {
    this.callParent();
    this.on('specialkey', this.checkEnterKey, this);
  },

  // Handle enter key presses, execute the search if the field has a value
  checkEnterKey: function(field, e) {
    if (e.getKey() === e.ENTER) {
      this.doSearch();
    }
  },

  doSearch: function() {
    var value = this.getValue();
    if (!Ext.isEmpty(value)) {
      this.fireEvent('search', this, value);
    }
  }

});
