/*!
 * JQuery.Label Plugin JavaScript Library v0.0.1
 * http://www.jackhq.com/
 *
 * Copyright (c) 2009 Jack Russell Software Company, LLC
 * Licensed under the MIT licenses.
 * http://www.jackhq.com/License
 *
 * Date: 2009-07-24 14:23:21 -0500 (Fri, 24 July 2009)
 * Revision: 1
 */
jQuery.extend(jQuery.expr[':'], {
  label: function(a, i, m) {    
    selector = 'label:contains(?)';
    if(jQuery(selector.replace(/\?/,m[3])).attr('for') == a.id) {
      return a;
    } else {
      return null;    
    }
  }
});