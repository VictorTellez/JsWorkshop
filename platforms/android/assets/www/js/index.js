/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
app.initialize();


/* Links for the examples */
var links = [
                { linkName:"Link 1" , linkUrl:"#" },
                { linkName:"Link 2" , linkUrl:"#" },
                { linkName:"Link 3" , linkUrl:"#" },
                { linkName:"Link 4" , linkUrl:"#" },
                { linkName:"Link 5" , linkUrl:"#" },
                { linkName:"Link 6" , linkUrl:"#" }
];

function createList() {

    console.log(" tellezJS createList: ");

    var filledList = "";

    for (i = 0; i < links.length-1; i++) {

        filledList += '<li> <a href=' + links[i].linkUrl + '>' +  links[i].linkName + '</li>'; 

    }
    
    var list = document.getElementById("list");
    console.log(" tellezJS list: " + list);
    list.innerHTML = filledList;

}

createList();

