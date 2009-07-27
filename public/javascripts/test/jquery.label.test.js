var JQueryLabelTest = {
  valid: function (count) {
    // Check and see if the check box is checked
    if(count == 1) {
      console.log("Test Was Successful");
    } else {
      console.log("Test Failed");
    }
    $('body').html('');
  },
  before: function () {
    // Create Test
    $('body').append(jLabel("my_checkbox", "My Checkbox") + br + jCheck("my_checkbox","1") + br);
    $('body').append(jLabel("my_checkbox2", "My Checkbox2") + br + jCheck("my_checkbox2","2") + br);
    $('body').append(jLabel("my_textbox", "My Textbox") + br + jText("my_textbox") + br);
    
  },
  select_checkbox: function () {
    
    this.before();
    console.log("Checkbox Test");
    // Use JQuery to find checkbox by label name
    this.valid($('input:checkbox:label("My Checkbox")').length);
    
  },
  select_textbox: function () {
    this.before();
    console.log("Textbox Test");
    this.valid($('input:label("My Textbox")').length);
    
  }
  
}