require 'rubygems'
require 'sinatra'
require 'haml'

get '/' do
  haml :index  
end

template :index do

<<-HAML
%html
  %head
    %script{:type => "text/javascript", :src => "javascripts/lib/jquery-1.3.2.js"}
    %script{:type => "text/javascript", :src => "javascripts/lib/jtag.js"}    
    %script{:type => "text/javascript", :src => "javascripts/jquery.label.js"}
    %script{:type => "text/javascript", :src => "javascripts/test/jquery.label.test.js"}
    %script{:type => "text/javascript", :src => "javascripts/application.js"}
  %body
  
HAML
    
end

