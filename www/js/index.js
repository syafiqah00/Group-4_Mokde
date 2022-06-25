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

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}
$(document).ready(function(){

    //setup crossroads
    crossroads.addRoute('foo');
    crossroads.addRoute('lorem/ipsum');
    crossroads.routed.add(console.log, console); //log all routes

    //setup hasher
    function parseHash(newHash, oldHash){
        crossroads.parse(newHash);
    }
    hasher.initialized.add(parseHash); //parse initial hash
    hasher.changed.add(parseHash); //parse hash changes
    hasher.init(); //start listening for history change

    if (!localStorage.datacount || localStorage.datacount == null)
    localStorage.datacount=0;
});

    var link3 = crossroads.addRoute('', function() {
        datalength = localStorage.datacount;
        htmlText = "";
        if (datalength > 0){
            for (var i = 1; i <= datalength; i++){
                myData = localStorage.getItem("data" + i);
                myData = JSON.parse(myData);
                htmlText = htmlText + "<tr onclick='trClick(this," +i+ ")'><td>" + myData.nickname + "</td><tr>";
            }
        }
        else{
            htmlText = htmlText + "<tr><td> no data found </td><tr>";
        }
            $('#maintable tbody').html(htmlText);
            $("#masterC").show();
            $("#divFrmAddKenalan").hide();
            $("#divFrmEditKenalan").hide();
    });

    var link4 = crossroads.addRoute('btnAddKenalan', function(){
        $("#masterC").hide();
        $("#divFrmAddKenalan").show();
        $("#divFrmEditKenalan").hide();
    });

    $(document).ready(function(){
        $("#frmAddKenalan").submit(function(e){
            e.preventDefault();
            e.stopPropagation();
            var nickName = $("#nickname").val();
            var userName = $("#username").val();
            var password = $("#password").val();
        
            myData={nickname:"",username:"",password:""};
            myData.nickname=nickName;
            myData.username=lastName;
            myData.password = password;
            console.log(JSON.stringify(myData));
            var i = localStorage.datacount
            i++;
            localStorage.setItem("data"+i, JSON.stringify(myData));
            localStorage.datacount=i;
        
            alert('New data added');

            $("#masterC").show();
            $("#divFrmAddKenalan").hide();
            $("#divFrmEditKenalan").hide();
        });
    
        function parseHash(newHash,oldHash){
            crossroads.parse(newHash);
        }
        hasher.initialiazed.add(parseHash);
        hasher.changed.add(parseHash);
        hasher.init();
    });