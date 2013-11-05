<html lang="en">
<head>
    <meta charset="utf-8">
</head>
<body>
<div id="main">
    <h1 class="page-title">WowApi JS official documentation</h1>
    
    


<section>
    
<header>
    <h2>
    WOWAPI
    </h2>
    
        <div class="class-description">WOWAPI is a javascript wrapper around the World of Warcraft public API (http://blizzard.github.io/api-wow-docs/).
The Blizzard Community Platform API provides a number of resources for developers and Wow enthusiasts to gather data about their characters, guilds and arena teams.
This class leverages the usage of that API to the JS developers by wrapping all API calls in simple JS methods.</div>
    
</header>  

<article>
    <div class="container-overview">
    
    
    
        
<dt>
    <h4 class="name" id="WOWAPI"><span class="type-signature"></span>new WOWAPI<span class="signature">(<span class="optional">region</span>, <span class="optional">locale</span>)</span><span class="type-signature"></span></h4>
    
    
</dt>
<dd>
    
    
    <div class="description">
        Instantiate a WOWAPI object that can be used to call underlying API methods.
The data available through the API is limited to the region that it is in.
Hence, US APIs accessed through us.battle.net will only contain data within US battlegroups and realms.
    </div>
    

    
    
    
    
    
        <h5>Parameters:</h5>
        

<table class="params">
    <thead>
	<tr>
		
		<th>Name</th>
		
		
		<th>Type</th>
		
		
		<th>Argument</th>
		
		
		
		<th>Default</th>
		
		
		<th class="last">Description</th>
	</tr>
	</thead>
	
	<tbody>
	
	
        <tr>
            
                <td class="name"><code>region</code></td>
            
            
            <td class="type">
            
                
<span class="param-type">string</span>


            
            </td>
            
            
                <td class="attributes">
                
                    &lt;optional><br>
                
                    
                
                    
                
                </td>
            
            
            
                <td class="default">
                
                    "eu"
                
                </td>
            
            
            <td class="description last">region Specifies the region that will be used for the API calls. May be <code>["us", "eu", "kr", "tw", "ch"]</code>.</td>
        </tr>
	
	
	
        <tr>
            
                <td class="name"><code>locale</code></td>
            
            
            <td class="type">
            
                
<span class="param-type">string</span>


            
            </td>
            
            
                <td class="attributes">
                
                    &lt;optional><br>
                
                    
                
                    
                
                </td>
            
            
            
                <td class="default">
                
                    First value from selected region
                
                </td>
            
            
            <td class="description last">locale Specifies the locale to be used with the request.
Support for locales is limited to those supported on the World of Warcraft community sites.
Possible values are based on the region:  <code>{
 "us": ["en_US",
 "es_MX",
 "pt_BR"],
 "eu": ["en_GB",
 "es_ES",
 "fr_FR",
 "ru_RU",
 "de_DE",
 "pt_PT",
 "it_IT"],
 "kr": ["ko_KR"],
 "tw": ["zh_TW"],
 "ch": ["zh_CN"]
 }</code></td>
        </tr>
	
	
	</tbody>
</table>
    
    
    
<dl class="details">
    
        
    
    
    

    
    
    
    
    
    <dt class="tag-author">Author:</dt>
    <dd class="tag-author">
        <ul>
            <li>eduardm (https://github.com/eduardm/wowjsapi)</li>
        </ul>
    </dd>
    
    
    
    
    
    <dt class="tag-license">License:</dt>
    <dd class="tag-license"><ul class="dummy"><li>Creative Commons Zero (CC0)</li></ul></dd>
    
    
    
    
    
    <dt class="tag-source">Source:</dt>
    <dd class="tag-source"><ul class="dummy"><li>
        <a href="wowapi.js.html">wowapi.js</a>, <a href="wowapi.js.html#line40">line 40</a>
    </li></ul></dd>
    
    
    
    
    
    
    
</dl>

    
    

    

    
    
    
    
    
    
    
        <h5>Example</h5>
        
    <pre class="prettyprint"><code> <code>var wowApiInstance = new WOWAPI("eu", "en_GB");</code></code></pre>

    
</dd>

    
    </div>
    
    
    
    
    
    
        <h3 class="subsection-title">Requires</h3>
        
        <ul>
            <li>module:JQuery</li>
        </ul>
    
    
    
    
    
    
    
    
    
    
    
    
    
</article>

</section> 
<section>
    
<header>
    <h2>
    
    </h2>
    
</header>  

<article>
    <div class="container-overview">
    
    
    
        
        
        
<dl class="details">
    
        
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
</dl>

        
        
    
    </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
        <h3 class="subsection-title">Methods</h3>
        
        <dl>
            
<dt>
    <h4 class="name" id="getAchievement"><span class="type-signature"></span>getAchievement<span class="signature">(achievementId, callbackFunction)</span><span class="type-signature"></span></h4>
    
    
</dt>
<dd>
    
    
    <div class="description">
        Returns the achievement data for given achievement. <a href="docs/http://blizzard.github.io/api-wow-docs/#achievement-api "> Wraps this API function</a>
    </div>
    

    
    
    
    
    
        <h5>Parameters:</h5>
        

<table class="params">
    <thead>
	<tr>
		
		<th>Name</th>
		
		
		<th>Type</th>
		
		
		
		
		
		<th class="last">Description</th>
	</tr>
	</thead>
	
	<tbody>
	
	
        <tr>
            
                <td class="name"><code>achievementId</code></td>
            
            
            <td class="type">
            
                
<span class="param-type">Integer</span>


            
            </td>
            
            
            
            
            
            <td class="description last">The achievement number</td>
        </tr>
	
	
	
        <tr>
            
                <td class="name"><code>callbackFunction</code></td>
            
            
            <td class="type">
            
                
<span class="param-type"><a href="docs/global.html#responseCallback">responseCallback</a></span>


            
            </td>
            
            
            
            
            
            <td class="description last">A callback function that will be triggered when we have the data</td>
        </tr>
	
	
	</tbody>
</table>
    
    
    
<dl class="details">
    
        
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    <dt class="tag-source">Source:</dt>
    <dd class="tag-source"><ul class="dummy"><li>
        <a href="docs/wowapi.js.html">wowapi.js</a>, <a href="docs/wowapi.js.html#line115">line 115</a>
    </li></ul></dd>
    
    
    
    
    
    
    
</dl>

    
    

    

    
    
    
    
    
    
    
        <h5>Example</h5>
        
    <pre class="prettyprint"><code> <code>wowApiInstance.getAchievement(2144, function(data) {console.log(data)});</code></code></pre>

    
</dd>

        
            
<dt>
    <h4 class="name" id="getAuctions"><span class="type-signature"></span>getAuctions<span class="signature">(realm, callbackFunction)</span><span class="type-signature"></span></h4>
    
    
</dt>
<dd>
    
    
    <div class="description">
        Returns the current auction house data for given realm. <a href="docs/http://blizzard.github.io/api-wow-docs/#auction-api "> Wraps this API function</a>
    </div>
    

    
    
    
    
    
        <h5>Parameters:</h5>
        

<table class="params">
    <thead>
	<tr>
		
		<th>Name</th>
		
		
		<th>Type</th>
		
		
		
		
		
		<th class="last">Description</th>
	</tr>
	</thead>
	
	<tbody>
	
	
        <tr>
            
                <td class="name"><code>realm</code></td>
            
            
            <td class="type">
            
                
<span class="param-type">String</span>


            
            </td>
            
            
            
            
            
            <td class="description last">The realm name</td>
        </tr>
	
	
	
        <tr>
            
                <td class="name"><code>callbackFunction</code></td>
            
            
            <td class="type">
            
                
<span class="param-type"><a href="docs/global.html#responseCallback">responseCallback</a></span>


            
            </td>
            
            
            
            
            
            <td class="description last">A callback function that will be triggered when we have the data</td>
        </tr>
	
	
	</tbody>
</table>
    
    
    
<dl class="details">
    
        
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    <dt class="tag-source">Source:</dt>
    <dd class="tag-source"><ul class="dummy"><li>
        <a href="docs/wowapi.js.html">wowapi.js</a>, <a href="docs/wowapi.js.html#line126">line 126</a>
    </li></ul></dd>
    
    
    
    
    
    
    
</dl>

    
    

    

    
    
    
    
    
    
    
        <h5>Example</h5>
        
    <pre class="prettyprint"><code> <code>wowApiInstance.getAuctions('medivh', function(data) {console.log(data)});</code></code></pre>

    
</dd>

        
            
<dt>
    <h4 class="name" id="getBattlePetAbility"><span class="type-signature"></span>getBattlePetAbility<span class="signature">(abilityId, callbackFunction)</span><span class="type-signature"></span></h4>
    
    
</dt>
<dd>
    
    
    <div class="description">
        Returns details about given ability id. <a href="docs/http://blizzard.github.io/api-wow-docs/#battlepet-api/abilities "> Wraps this API function</a>
    </div>
    

    
    
    
    
    
        <h5>Parameters:</h5>
        

<table class="params">
    <thead>
	<tr>
		
		<th>Name</th>
		
		
		<th>Type</th>
		
		
		
		
		
		<th class="last">Description</th>
	</tr>
	</thead>
	
	<tbody>
	
	
        <tr>
            
                <td class="name"><code>abilityId</code></td>
            
            
            <td class="type">
            
                
<span class="param-type">Integer</span>


            
            </td>
            
            
            
            
            
            <td class="description last"></td>
        </tr>
	
	
	
        <tr>
            
                <td class="name"><code>callbackFunction</code></td>
            
            
            <td class="type">
            
                
<span class="param-type"><a href="docs/global.html#responseCallback">responseCallback</a></span>


            
            </td>
            
            
            
            
            
            <td class="description last">A callback function that will be triggered when we have the data</td>
        </tr>
	
	
	</tbody>
</table>
    
    
    
<dl class="details">
    
        
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    <dt class="tag-source">Source:</dt>
    <dd class="tag-source"><ul class="dummy"><li>
        <a href="docs/wowapi.js.html">wowapi.js</a>, <a href="docs/wowapi.js.html#line137">line 137</a>
    </li></ul></dd>
    
    
    
    
    
    
    
</dl>

    
    

    

    
    
    
    
    
    
    
        <h5>Example</h5>
        
    <pre class="prettyprint"><code> <code>wowApiInstance.getBattlePetAbility(640, function(data) {console.log(data)});</code></code></pre>

    
</dd>

        
            
<dt>
    <h4 class="name" id="getBattlePetSpecies"><span class="type-signature"></span>getBattlePetSpecies<span class="signature">(speciesId, callbackFunction)</span><span class="type-signature"></span></h4>
    
    
</dt>
<dd>
    
    
    <div class="description">
        Returns details about given species id. <a href="docs/http://blizzard.github.io/api-wow-docs/#battlepet-api/species "> Wraps this API function</a>
    </div>
    

    
    
    
    
    
        <h5>Parameters:</h5>
        

<table class="params">
    <thead>
	<tr>
		
		<th>Name</th>
		
		
		<th>Type</th>
		
		
		
		
		
		<th class="last">Description</th>
	</tr>
	</thead>
	
	<tbody>
	
	
        <tr>
            
                <td class="name"><code>speciesId</code></td>
            
            
            <td class="type">
            
                
<span class="param-type">Integer</span>


            
            </td>
            
            
            
            
            
            <td class="description last"></td>
        </tr>
	
	
	
        <tr>
            
                <td class="name"><code>callbackFunction</code></td>
            
            
            <td class="type">
            
                
<span class="param-type"><a href="docs/global.html#responseCallback">responseCallback</a></span>


            
            </td>
            
            
            
            
            
            <td class="description last">A callback function that will be triggered when we have the data</td>
        </tr>
	
	
	</tbody>
</table>
    
    
    
<dl class="details">
    
        
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    <dt class="tag-source">Source:</dt>
    <dd class="tag-source"><ul class="dummy"><li>
        <a href="docs/wowapi.js.html">wowapi.js</a>, <a href="docs/wowapi.js.html#line148">line 148</a>
    </li></ul></dd>
    
    
    
    
    
    
    
</dl>

    
    

    

    
    
    
    
    
    
    
        <h5>Example</h5>
        
    <pre class="prettyprint"><code> <code>wowApiInstance.getBattlePetAbility(640, function(data) {console.log(data)});</code></code></pre>

    
</dd>

        
            
<dt>
    <h4 class="name" id="getBattlePetStats"><span class="type-signature"></span>getBattlePetStats<span class="signature">(speciesDetails, callbackFunction)</span><span class="type-signature"></span></h4>
    
    
</dt>
<dd>
    
    
    <div class="description">
        Returns details about given battle pet parameters. <a href="docs/http://blizzard.github.io/api-wow-docs/#battlepet-api/stats "> Wraps this API function</a>
    </div>
    

    
    
    
    
    
        <h5>Parameters:</h5>
        

<table class="params">
    <thead>
	<tr>
		
		<th>Name</th>
		
		
		<th>Type</th>
		
		
		
		
		
		<th class="last">Description</th>
	</tr>
	</thead>
	
	<tbody>
	
	
        <tr>
            
                <td class="name"><code>speciesDetails</code></td>
            
            
            <td class="type">
            
                
<span class="param-type"><a href="docs/global.html#battlePetObject">battlePetObject</a></span>


            
            </td>
            
            
            
            
            
            <td class="description last"></td>
        </tr>
	
	
	
        <tr>
            
                <td class="name"><code>callbackFunction</code></td>
            
            
            <td class="type">
            
                
<span class="param-type"><a href="docs/global.html#responseCallback">responseCallback</a></span>


            
            </td>
            
            
            
            
            
            <td class="description last">A callback function that will be triggered when we have the data</td>
        </tr>
	
	
	</tbody>
</table>
    
    
    
<dl class="details">
    
        
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    <dt class="tag-source">Source:</dt>
    <dd class="tag-source"><ul class="dummy"><li>
        <a href="docs/wowapi.js.html">wowapi.js</a>, <a href="docs/wowapi.js.html#line167">line 167</a>
    </li></ul></dd>
    
    
    
    
    
    
    
</dl>

    
    

    

    
    
    
    
    
    
    
        <h5>Example</h5>
        
    <pre class="prettyprint"><code> <code><pre>
         wowApiInstance.getBattlePetStats({
             speciesId: 640,
             level: 25,
             breedId: 3,
             qualityId: 1
         }, function (data) {
            console.log(data);
         });</pre></code></code></pre>

    
</dd>

        
            
<dt>
    <h4 class="name" id="getChallengeLeaderboard"><span class="type-signature"></span>getChallengeLeaderboard<span class="signature">(realm, callbackFunction)</span><span class="type-signature"></span></h4>
    
    
</dt>
<dd>
    
    
    <div class="description">
        Returns the current challenge mode leaderboard for given realm or for region. <a href="docs/http://blizzard.github.io/api-wow-docs/#challenge-mode-api "> Wraps this API function</a>
    </div>
    

    
    
    
    
    
        <h5>Parameters:</h5>
        

<table class="params">
    <thead>
	<tr>
		
		<th>Name</th>
		
		
		<th>Type</th>
		
		
		
		
		
		<th class="last">Description</th>
	</tr>
	</thead>
	
	<tbody>
	
	
        <tr>
            
                <td class="name"><code>realm</code></td>
            
            
            <td class="type">
            
                
<span class="param-type">String</span>
|

<span class="param-type">null</span>


            
            </td>
            
            
            
            
            
            <td class="description last">The realm name. If it is null, it will return region leaderboard</td>
        </tr>
	
	
	
        <tr>
            
                <td class="name"><code>callbackFunction</code></td>
            
            
            <td class="type">
            
                
<span class="param-type"><a href="docs/global.html#responseCallback">responseCallback</a></span>


            
            </td>
            
            
            
            
            
            <td class="description last">A callback function that will be triggered when we have the data</td>
        </tr>
	
	
	</tbody>
</table>
    
    
    
<dl class="details">
    
        
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    <dt class="tag-source">Source:</dt>
    <dd class="tag-source"><ul class="dummy"><li>
        <a href="docs/wowapi.js.html">wowapi.js</a>, <a href="docs/wowapi.js.html#line184">line 184</a>
    </li></ul></dd>
    
    
    
    
    
    
    
</dl>

    
    

    

    
    
    
    
    
    
    
        <h5>Example</h5>
        
    <pre class="prettyprint"><code> <code>wowApiInstance.getChallengeLeaderboard("steamwheedle-cartel", function (data) {console.log(data);});<br />
wowApiInstance.getChallengeLeaderboard(null, function (data) {console.log(data);});
</code></code></pre>

    
</dd>

        
            
<dt>
    <h4 class="name" id="getCharacterProfile"><span class="type-signature"></span>getCharacterProfile<span class="signature">(characterOptions, callbackFunction)</span><span class="type-signature"></span></h4>
    
    
</dt>
<dd>
    
    
    <div class="description">
        Returns character profile based on a characterOptions object. <a href="docs/http://blizzard.github.io/api-wow-docs/#character-profile-api "> Wraps this API function</a>
    </div>
    

    
    
    
    
    
        <h5>Parameters:</h5>
        

<table class="params">
    <thead>
	<tr>
		
		<th>Name</th>
		
		
		<th>Type</th>
		
		
		
		
		
		<th class="last">Description</th>
	</tr>
	</thead>
	
	<tbody>
	
	
        <tr>
            
                <td class="name"><code>characterOptions</code></td>
            
            
            <td class="type">
            
                
<span class="param-type"><a href="docs/global.html#characterOptions">characterOptions</a></span>


            
            </td>
            
            
            
            
            
            <td class="description last">Contains the options describing what to retrieve</td>
        </tr>
	
	
	
        <tr>
            
                <td class="name"><code>callbackFunction</code></td>
            
            
            <td class="type">
            
                
<span class="param-type"><a href="docs/global.html#responseCallback">responseCallback</a></span>


            
            </td>
            
            
            
            
            
            <td class="description last">A callback function that will be triggered when we have the data</td>
        </tr>
	
	
	</tbody>
</table>
    
    
    
<dl class="details">
    
        
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    <dt class="tag-source">Source:</dt>
    <dd class="tag-source"><ul class="dummy"><li>
        <a href="docs/wowapi.js.html">wowapi.js</a>, <a href="docs/wowapi.js.html#line202">line 202</a>
    </li></ul></dd>
    
    
    
    
    
    
    
</dl>

    
    

    

    
    
    
    
    
    
    
        <h5>Example</h5>
        
    <pre class="prettyprint"><code> <code>wowApiInstance.getCharacterProfile({realm: "steamwheedle-cartel",characterName: "HarapAlb"}, function (data) {console.log(data);});<br />
wowApiInstance.getCharacterProfile({realm: "steamwheedle-cartel",characterName: "HarapAlb",fields: "items"}, function (data) { console.log(data); });<br />
wowApiInstance.getCharacterProfile({realm: "steamwheedle-cartel", characterName: "HarapAlb", fields: "items, pets, stats, titles"}, function (data) {console.log(data);});<br />
</code></code></pre>

    
</dd>

        
            
<dt>
    <h4 class="name" id="getGuildProfile"><span class="type-signature"></span>getGuildProfile<span class="signature">(guildOptions, callbackFunction)</span><span class="type-signature"></span></h4>
    
    
</dt>
<dd>
    
    
    <div class="description">
        Returns guild profile based on a guildOptions object. <a href="docs/http://blizzard.github.io/api-wow-docs/#guild-profile-api "> Wraps this API function</a>
    </div>
    

    
    
    
    
    
        <h5>Parameters:</h5>
        

<table class="params">
    <thead>
	<tr>
		
		<th>Name</th>
		
		
		<th>Type</th>
		
		
		
		
		
		<th class="last">Description</th>
	</tr>
	</thead>
	
	<tbody>
	
	
        <tr>
            
                <td class="name"><code>guildOptions</code></td>
            
            
            <td class="type">
            
                
<span class="param-type"><a href="docs/global.html#guildOptions">guildOptions</a></span>


            
            </td>
            
            
            
            
            
            <td class="description last">Contains the options describing what to retrieve</td>
        </tr>
	
	
	
        <tr>
            
                <td class="name"><code>callbackFunction</code></td>
            
            
            <td class="type">
            
                
<span class="param-type"><a href="docs/global.html#responseCallback">responseCallback</a></span>


            
            </td>
            
            
            
            
            
            <td class="description last">A callback function that will be triggered when we have the data</td>
        </tr>
	
	
	</tbody>
</table>
    
    
    
<dl class="details">
    
        
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    <dt class="tag-source">Source:</dt>
    <dd class="tag-source"><ul class="dummy"><li>
        <a href="docs/wowapi.js.html">wowapi.js</a>, <a href="docs/wowapi.js.html#line256">line 256</a>
    </li></ul></dd>
    
    
    
    
    
    
    
</dl>

    
    

    

    
    
    
    
    
    
    
        <h5>Example</h5>
        
    <pre class="prettyprint"><code> <code><pre>
         wowApiInstance.getGuildProfile({
             realm: "steamwheedle-cartel",
             guildName: "House of Elements"
         }, function (data) {
            console.log(data);
         });<br />
         wowApiInstance.getGuildProfile({
             realm: "steamwheedle-cartel",
             guildName: "House of Elements",
             fields: "members, achievements, news, challenge"
         }, function (data) {
            console.log(data);
         });
</pre></code></code></pre>

    
</dd>

        
            
<dt>
    <h4 class="name" id="getIemSet"><span class="type-signature"></span>getIemSet<span class="signature">(setId, callbackFunction)</span><span class="type-signature"></span></h4>
    
    
</dt>
<dd>
    
    
    <div class="description">
        Returns details about given item set id. <a href="docs/http://blizzard.github.io/api-wow-docs/#item-api/item-set "> Wraps this API function</a>
    </div>
    

    
    
    
    
    
        <h5>Parameters:</h5>
        

<table class="params">
    <thead>
	<tr>
		
		<th>Name</th>
		
		
		<th>Type</th>
		
		
		
		
		
		<th class="last">Description</th>
	</tr>
	</thead>
	
	<tbody>
	
	
        <tr>
            
                <td class="name"><code>setId</code></td>
            
            
            <td class="type">
            
                
<span class="param-type">Integer</span>


            
            </td>
            
            
            
            
            
            <td class="description last"></td>
        </tr>
	
	
	
        <tr>
            
                <td class="name"><code>callbackFunction</code></td>
            
            
            <td class="type">
            
                
<span class="param-type"><a href="docs/global.html#responseCallback">responseCallback</a></span>


            
            </td>
            
            
            
            
            
            <td class="description last">A callback function that will be triggered when we have the data</td>
        </tr>
	
	
	</tbody>
</table>
    
    
    
<dl class="details">
    
        
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    <dt class="tag-source">Source:</dt>
    <dd class="tag-source"><ul class="dummy"><li>
        <a href="docs/wowapi.js.html">wowapi.js</a>, <a href="docs/wowapi.js.html#line231">line 231</a>
    </li></ul></dd>
    
    
    
    
    
    
    
</dl>

    
    

    

    
    
    
    
    
    
    
        <h5>Example</h5>
        
    <pre class="prettyprint"><code> <code>wowApiInstance.getItem(1060, function(data) {console.log(data)});</code></code></pre>

    
</dd>

        
            
<dt>
    <h4 class="name" id="getItem"><span class="type-signature"></span>getItem<span class="signature">(itemId, callbackFunction)</span><span class="type-signature"></span></h4>
    
    
</dt>
<dd>
    
    
    <div class="description">
        Returns details about given item id. <a href="docs/http://blizzard.github.io/api-wow-docs/#item-api/individual-item "> Wraps this API function</a>
    </div>
    

    
    
    
    
    
        <h5>Parameters:</h5>
        

<table class="params">
    <thead>
	<tr>
		
		<th>Name</th>
		
		
		<th>Type</th>
		
		
		
		
		
		<th class="last">Description</th>
	</tr>
	</thead>
	
	<tbody>
	
	
        <tr>
            
                <td class="name"><code>itemId</code></td>
            
            
            <td class="type">
            
                
<span class="param-type">Integer</span>


            
            </td>
            
            
            
            
            
            <td class="description last"></td>
        </tr>
	
	
	
        <tr>
            
                <td class="name"><code>callbackFunction</code></td>
            
            
            <td class="type">
            
                
<span class="param-type"><a href="docs/global.html#responseCallback">responseCallback</a></span>


            
            </td>
            
            
            
            
            
            <td class="description last">A callback function that will be triggered when we have the data</td>
        </tr>
	
	
	</tbody>
</table>
    
    
    
<dl class="details">
    
        
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    <dt class="tag-source">Source:</dt>
    <dd class="tag-source"><ul class="dummy"><li>
        <a href="docs/wowapi.js.html">wowapi.js</a>, <a href="docs/wowapi.js.html#line220">line 220</a>
    </li></ul></dd>
    
    
    
    
    
    
    
</dl>

    
    

    

    
    
    
    
    
    
    
        <h5>Example</h5>
        
    <pre class="prettyprint"><code> <code>wowApiInstance.getItem(18803, function(data) {console.log(data)});</code></code></pre>

    
</dd>

        
            
<dt>
    <h4 class="name" id="getPVPLeaderboard"><span class="type-signature"></span>getPVPLeaderboard<span class="signature">(bracket, callbackFunction)</span><span class="type-signature"></span></h4>
    
    
</dt>
<dd>
    
    
    <div class="description">
        Returns the PVP leaderboard for given bracket. <a href="docs/http://blizzard.github.io/api-wow-docs/#pvp-api "> Wraps this API function</a>
    </div>
    

    
    
    
    
    
        <h5>Parameters:</h5>
        

<table class="params">
    <thead>
	<tr>
		
		<th>Name</th>
		
		
		<th>Type</th>
		
		
		
		
		
		<th class="last">Description</th>
	</tr>
	</thead>
	
	<tbody>
	
	
        <tr>
            
                <td class="name"><code>bracket</code></td>
            
            
            <td class="type">
            
                
<span class="param-type">String</span>


            
            </td>
            
            
            
            
            
            <td class="description last">The bracket for the leaderborad. One of: "2v2" | "3v3" | "5v5" | "rbg"</td>
        </tr>
	
	
	
        <tr>
            
                <td class="name"><code>callbackFunction</code></td>
            
            
            <td class="type">
            
                
<span class="param-type"><a href="docs/global.html#responseCallback">responseCallback</a></span>


            
            </td>
            
            
            
            
            
            <td class="description last">A callback function that will be triggered when we have the data</td>
        </tr>
	
	
	</tbody>
</table>
    
    
    
<dl class="details">
    
        
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    <dt class="tag-source">Source:</dt>
    <dd class="tag-source"><ul class="dummy"><li>
        <a href="docs/wowapi.js.html">wowapi.js</a>, <a href="docs/wowapi.js.html#line274">line 274</a>
    </li></ul></dd>
    
    
    
    
    
    
    
</dl>

    
    

    

    
    
    
    
    
    
    
        <h5>Example</h5>
        
    <pre class="prettyprint"><code> <code>wowApiInstance.getPVPLeaderboard("3v3", function (data) { console.log(data); });</code></code></pre>

    
</dd>

        
            
<dt>
    <h4 class="name" id="getRealmStatus"><span class="type-signature"></span>getRealmStatus<span class="signature">(realms, callbackFunction)</span><span class="type-signature"></span></h4>
    
    
</dt>
<dd>
    
    
    <div class="description">
        Returns the realm(s) status. <a href="docs/http://blizzard.github.io/api-wow-docs/#realm-status-api "> Wraps this API function</a>
    </div>
    

    
    
    
    
    
        <h5>Parameters:</h5>
        

<table class="params">
    <thead>
	<tr>
		
		<th>Name</th>
		
		
		<th>Type</th>
		
		
		
		
		
		<th class="last">Description</th>
	</tr>
	</thead>
	
	<tbody>
	
	
        <tr>
            
                <td class="name"><code>realms</code></td>
            
            
            <td class="type">
            
                
<span class="param-type">String</span>
|

<span class="param-type">null</span>


            
            </td>
            
            
            
            
            
            <td class="description last">The list of realms to get status, or null for all realms from region</td>
        </tr>
	
	
	
        <tr>
            
                <td class="name"><code>callbackFunction</code></td>
            
            
            <td class="type">
            
                
<span class="param-type"><a href="docs/global.html#responseCallback">responseCallback</a></span>


            
            </td>
            
            
            
            
            
            <td class="description last">A callback function that will be triggered when we have the data</td>
        </tr>
	
	
	</tbody>
</table>
    
    
    
<dl class="details">
    
        
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    <dt class="tag-source">Source:</dt>
    <dd class="tag-source"><ul class="dummy"><li>
        <a href="docs/wowapi.js.html">wowapi.js</a>, <a href="docs/wowapi.js.html#line292">line 292</a>
    </li></ul></dd>
    
    
    
    
    
    
    
</dl>

    
    

    

    
    
    
    
    
    
    
        <h5>Example</h5>
        
    <pre class="prettyprint"><code> <code><pre>
          wowApiInstance.getRealmStatus(null, function (data) {
             console.log(data);
          });<br />
          wow.getRealmStatus("steamwheedle-cartel,medivh", function (data) {
             console.log(data);
          });
</pre></code></code></pre>

    
</dd>

        
            
<dt>
    <h4 class="name" id="getRecipe"><span class="type-signature"></span>getRecipe<span class="signature">(recipeId, callbackFunction)</span><span class="type-signature"></span></h4>
    
    
</dt>
<dd>
    
    
    <div class="description">
        Returns details about given recipe id. <a href="docs/http://blizzard.github.io/api-wow-docs/#recipe-api "> Wraps this API function</a>
    </div>
    

    
    
    
    
    
        <h5>Parameters:</h5>
        

<table class="params">
    <thead>
	<tr>
		
		<th>Name</th>
		
		
		<th>Type</th>
		
		
		
		
		
		<th class="last">Description</th>
	</tr>
	</thead>
	
	<tbody>
	
	
        <tr>
            
                <td class="name"><code>recipeId</code></td>
            
            
            <td class="type">
            
                
<span class="param-type">Integer</span>


            
            </td>
            
            
            
            
            
            <td class="description last"></td>
        </tr>
	
	
	
        <tr>
            
                <td class="name"><code>callbackFunction</code></td>
            
            
            <td class="type">
            
                
<span class="param-type"><a href="docs/global.html#responseCallback">responseCallback</a></span>


            
            </td>
            
            
            
            
            
            <td class="description last">A callback function that will be triggered when we have the data</td>
        </tr>
	
	
	</tbody>
</table>
    
    
    
<dl class="details">
    
        
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    <dt class="tag-source">Source:</dt>
    <dd class="tag-source"><ul class="dummy"><li>
        <a href="docs/wowapi.js.html">wowapi.js</a>, <a href="docs/wowapi.js.html#line307">line 307</a>
    </li></ul></dd>
    
    
    
    
    
    
    
</dl>

    
    

    

    
    
    
    
    
    
    
        <h5>Example</h5>
        
    <pre class="prettyprint"><code> <code>wowApiInstance.getRecipe(33994, function(data) {console.log(data)});</code></code></pre>

    
</dd>

        
            
<dt>
    <h4 class="name" id="getSpell"><span class="type-signature"></span>getSpell<span class="signature">(spellId, callbackFunction)</span><span class="type-signature"></span></h4>
    
    
</dt>
<dd>
    
    
    <div class="description">
        Returns details about spell recipe id. <a href="docs/http://blizzard.github.io/api-wow-docs/#spell-api "> Wraps this API function</a>
    </div>
    

    
    
    
    
    
        <h5>Parameters:</h5>
        

<table class="params">
    <thead>
	<tr>
		
		<th>Name</th>
		
		
		<th>Type</th>
		
		
		
		
		
		<th class="last">Description</th>
	</tr>
	</thead>
	
	<tbody>
	
	
        <tr>
            
                <td class="name"><code>spellId</code></td>
            
            
            <td class="type">
            
                
<span class="param-type">Integer</span>


            
            </td>
            
            
            
            
            
            <td class="description last"></td>
        </tr>
	
	
	
        <tr>
            
                <td class="name"><code>callbackFunction</code></td>
            
            
            <td class="type">
            
                
<span class="param-type"><a href="docs/global.html#responseCallback">responseCallback</a></span>


            
            </td>
            
            
            
            
            
            <td class="description last">A callback function that will be triggered when we have the data</td>
        </tr>
	
	
	</tbody>
</table>
    
    
    
<dl class="details">
    
        
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    <dt class="tag-source">Source:</dt>
    <dd class="tag-source"><ul class="dummy"><li>
        <a href="docs/wowapi.js.html">wowapi.js</a>, <a href="docs/wowapi.js.html#line318">line 318</a>
    </li></ul></dd>
    
    
    
    
    
    
    
</dl>

    
    

    

    
    
    
    
    
    
    
        <h5>Example</h5>
        
    <pre class="prettyprint"><code> <code>wowApiInstance.getSpell(8056, function(data) {console.log(data)});</code></code></pre>

    
</dd>

        </dl>
    
    
    
        <h3 class="subsection-title">Type Definitions</h3>
        
        <dl>
                
<dt>
    <h4 class="name" id="battlePetObject">battlePetObject</h4>
    
    
</dt>
<dd>
    
    
    
        <h5>Type:</h5>
        <ul>
            <li>
                
<span class="param-type">Object</span>


            </li>
        </ul>
    

    
<dl class="details">
    
        
        <h5 class="subsection-title">Properties:</h5>
        
        <dl>

<table class="props">
    <thead>
	<tr>
		
		<th>Name</th>
		
		
		<th>Type</th>
		
		
		<th>Argument</th>
		
		
		
		<th>Default</th>
		
		
		<th class="last">Description</th>
	</tr>
	</thead>
	
	<tbody>
	
	
        <tr>
            
                <td class="name"><code>speciesId</code></td>
            
            
            <td class="type">
            
                
<span class="param-type">Integer</span>


            
            </td>
            
            
                <td class="attributes">
                
                    
                
                </td>
            
            
            
                <td class="default">
                
                </td>
            
            
            <td class="description last">SpeciesId for what we want the stats</td>
        </tr>
	
	
	
        <tr>
            
                <td class="name"><code>level</code></td>
            
            
            <td class="type">
            
                
<span class="param-type">Integer</span>


            
            </td>
            
            
                <td class="attributes">
                
                    &lt;optional><br>
                
                    
                
                </td>
            
            
            
                <td class="default">
                
                    1
                
                </td>
            
            
            <td class="description last">Level of the pet to display stats</td>
        </tr>
	
	
	
        <tr>
            
                <td class="name"><code>breedId</code></td>
            
            
            <td class="type">
            
                
<span class="param-type">Integer</span>


            
            </td>
            
            
                <td class="attributes">
                
                    &lt;optional><br>
                
                    
                
                </td>
            
            
            
                <td class="default">
                
                    3
                
                </td>
            
            
            <td class="description last">Specify the breed</td>
        </tr>
	
	
	
        <tr>
            
                <td class="name"><code>qualityId</code></td>
            
            
            <td class="type">
            
                
<span class="param-type">Integer</span>


            
            </td>
            
            
                <td class="attributes">
                
                    &lt;optional><br>
                
                    
                
                </td>
            
            
            
                <td class="default">
                
                    1
                
                </td>
            
            
            <td class="description last">Specify quality</td>
        </tr>
	
	
	</tbody>
</table></dl>
        
    
        
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    <dt class="tag-source">Source:</dt>
    <dd class="tag-source"><ul class="dummy"><li>
        <a href="docs/wowapi.js.html">wowapi.js</a>, <a href="docs/wowapi.js.html#line344">line 344</a>
    </li></ul></dd>
    
    
    
    
    
    
    
</dl>

    
    
</dd>

            
                
<dt>
    <h4 class="name" id="characterOptions">characterOptions</h4>
    
    
</dt>
<dd>
    
    
    
        <h5>Type:</h5>
        <ul>
            <li>
                
<span class="param-type">Object</span>


            </li>
        </ul>
    

    
<dl class="details">
    
        
        <h5 class="subsection-title">Properties:</h5>
        
        <dl>

<table class="props">
    <thead>
	<tr>
		
		<th>Name</th>
		
		
		<th>Type</th>
		
		
		<th>Argument</th>
		
		
		
		<th>Default</th>
		
		
		<th class="last">Description</th>
	</tr>
	</thead>
	
	<tbody>
	
	
        <tr>
            
                <td class="name"><code>realm</code></td>
            
            
            <td class="type">
            
                
<span class="param-type">String</span>


            
            </td>
            
            
                <td class="attributes">
                
                    
                
                </td>
            
            
            
                <td class="default">
                
                </td>
            
            
            <td class="description last">Realm name</td>
        </tr>
	
	
	
        <tr>
            
                <td class="name"><code>characterName</code></td>
            
            
            <td class="type">
            
                
<span class="param-type">String</span>


            
            </td>
            
            
                <td class="attributes">
                
                    
                
                </td>
            
            
            
                <td class="default">
                
                </td>
            
            
            <td class="description last">Character name</td>
        </tr>
	
	
	
        <tr>
            
                <td class="name"><code>fields</code></td>
            
            
            <td class="type">
            
                
<span class="param-type">String</span>


            
            </td>
            
            
                <td class="attributes">
                
                    &lt;optional><br>
                
                    
                
                </td>
            
            
            
                <td class="default">
                
                    ""
                
                </td>
            
            
            <td class="description last">String with one or more fields from the profile separated by comma.
If it is missing, only the summary will be returned.
Possible values:
<pre>
achievements    A map of achievement data including completion timestamps and criteria information.
appearance    A map of values that describes the face, features and helm/cloak display preferences and attributes.
feed    The activity feed of the character.
guild    A summary of the guild that the character belongs to. If the character does not belong to a guild and this field is requested, this field will not be exposed.
hunterPets    A list of all of the combat pets obtained by the character.
items    A list of items equiped by the character. Use of this field will also include the average item level and average item level equipped for the character.
mounts    A list of all of the mounts obtained by the character.
pets    A list of the battle pets obtained by the character.
petSlots    Data about the current battle pet slots on this characters account.
professions    A list of the character's professions. It is important to note that when this information is retrieved, it will also include the known recipes of each of the listed professions.
progression    A list of raids and bosses indicating raid progression and completedness.
pvp    A map of pvp information including arena team membership and rated battlegrounds information.
quests    A list of quests completed by the character.
reputation    A list of the factions that the character has an associated reputation with.
stats    A map of character attributes and stats.
talents    A list of talent structures.
titles    A list of the titles obtained by the character including the currently selected title.
     </pre></td>
        </tr>
	
	
	</tbody>
</table></dl>
        
    
        
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    <dt class="tag-source">Source:</dt>
    <dd class="tag-source"><ul class="dummy"><li>
        <a href="docs/wowapi.js.html">wowapi.js</a>, <a href="docs/wowapi.js.html#line346">line 346</a>
    </li></ul></dd>
    
    
    
    
    
    
    
</dl>

    
    
</dd>

            
                
<dt>
    <h4 class="name" id="guildOptions">guildOptions</h4>
    
    
</dt>
<dd>
    
    
    
        <h5>Type:</h5>
        <ul>
            <li>
                
<span class="param-type">Object</span>


            </li>
        </ul>
    

    
<dl class="details">
    
        
        <h5 class="subsection-title">Properties:</h5>
        
        <dl>

<table class="props">
    <thead>
	<tr>
		
		<th>Name</th>
		
		
		<th>Type</th>
		
		
		<th>Argument</th>
		
		
		
		<th>Default</th>
		
		
		<th class="last">Description</th>
	</tr>
	</thead>
	
	<tbody>
	
	
        <tr>
            
                <td class="name"><code>realm</code></td>
            
            
            <td class="type">
            
                
<span class="param-type">String</span>


            
            </td>
            
            
                <td class="attributes">
                
                    
                
                </td>
            
            
            
                <td class="default">
                
                </td>
            
            
            <td class="description last">Realm name</td>
        </tr>
	
	
	
        <tr>
            
                <td class="name"><code>guildName</code></td>
            
            
            <td class="type">
            
                
<span class="param-type">String</span>


            
            </td>
            
            
                <td class="attributes">
                
                    
                
                </td>
            
            
            
                <td class="default">
                
                </td>
            
            
            <td class="description last">Guild name</td>
        </tr>
	
	
	
        <tr>
            
                <td class="name"><code>fields</code></td>
            
            
            <td class="type">
            
                
<span class="param-type">String</span>


            
            </td>
            
            
                <td class="attributes">
                
                    &lt;optional><br>
                
                    
                
                </td>
            
            
            
                <td class="default">
                
                    ""
                
                </td>
            
            
            <td class="description last">String with one or more fields from the profile separated by comma.
If it is missing, only the summary will be returned.
Possible values:
<pre>
members    A list of characters that are a member of the guild
achievements    A set of data structures that describe the achievements earned by the guild.
news    A set of data structures that describe the news feed of the guild.
challenge    The top 3 challenge mode guild run times for each challenge mode map.
     </pre></td>
        </tr>
	
	
	</tbody>
</table></dl>
        
    
        
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    <dt class="tag-source">Source:</dt>
    <dd class="tag-source"><ul class="dummy"><li>
        <a href="docs/wowapi.js.html">wowapi.js</a>, <a href="docs/wowapi.js.html#line348">line 348</a>
    </li></ul></dd>
    
    
    
    
    
    
    
</dl>

    
    
</dd>

            
                
<dt>
    <h4 class="name" id="responseCallback"><span class="type-signature"></span>responseCallback<span class="signature">(data)</span><span class="type-signature"></span></h4>
    
    
</dt>
<dd>
    
    

    
    
    
    
    
        <h5>Parameters:</h5>
        

<table class="params">
    <thead>
	<tr>
		
		<th>Name</th>
		
		
		<th>Type</th>
		
		
		
		
		
		<th class="last">Description</th>
	</tr>
	</thead>
	
	<tbody>
	
	
        <tr>
            
                <td class="name"><code>data</code></td>
            
            
            <td class="type">
            
                
<span class="param-type">JSON</span>


            
            </td>
            
            
            
            
            
            <td class="description last">JSON containing requested data</td>
        </tr>
	
	
	</tbody>
</table>
    
    
    
<dl class="details">
    
        
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    <dt class="tag-source">Source:</dt>
    <dd class="tag-source"><ul class="dummy"><li>
        <a href="docs/wowapi.js.html">wowapi.js</a>, <a href="docs/wowapi.js.html#line342">line 342</a>
    </li></ul></dd>
    
    
    
    
    
    
    
</dl>

    
    

    

    
    
    
    
    
    
    
</dd>

            </dl>
    
    
    
</article>

</section>  




</div>

<nav>
    <h2><a href="docs/index.html">Index</a></h2><h3>Classes</h3><ul><li><a href="docs/WOWAPI.html">WOWAPI</a></li></ul><h3>Global</h3><ul><li><a href="docs/global.html#getAchievement">getAchievement</a></li><li><a href="docs/global.html#getAuctions">getAuctions</a></li><li><a href="docs/global.html#getBattlePetAbility">getBattlePetAbility</a></li><li><a href="docs/global.html#getBattlePetSpecies">getBattlePetSpecies</a></li><li><a href="docs/global.html#getBattlePetStats">getBattlePetStats</a></li><li><a href="docs/global.html#getChallengeLeaderboard">getChallengeLeaderboard</a></li><li><a href="docs/global.html#getCharacterProfile">getCharacterProfile</a></li><li><a href="docs/global.html#getGuildProfile">getGuildProfile</a></li><li><a href="docs/global.html#getIemSet">getIemSet</a></li><li><a href="docs/global.html#getItem">getItem</a></li><li><a href="docs/global.html#getPVPLeaderboard">getPVPLeaderboard</a></li><li><a href="docs/global.html#getRealmStatus">getRealmStatus</a></li><li><a href="docs/global.html#getRecipe">getRecipe</a></li><li><a href="docs/global.html#getSpell">getSpell</a></li></ul>
</nav>

<br clear="both">

<footer>
    Documentation generated by <a href="docs/https://github.com/jsdoc3/jsdoc">JSDoc 3.3.0-dev</a> on Mon Nov 04 2013 17:42:42 GMT+0100 (CET)
</footer>

<script> prettyPrint(); </script>
<script src="scripts/linenumber.js"> </script>
</body>
</html>