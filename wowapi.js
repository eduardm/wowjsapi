/**
 * @class WOWAPI
 * @classdesc WOWAPI is a javascript wrapper around the World of Warcraft public API (http://blizzard.github.io/api-wow-docs/).
 * The Blizzard Community Platform API provides a number of resources for developers and Wow enthusiasts to gather data about their characters, guilds and arena teams.
 * This class leverages the usage of that API to the JS developers by wrapping all API calls in simple JS methods.
 * @author eduardm (https://github.com/eduardm/wowjsapi)
 * @license  Creative Commons Zero (CC0)

 *
 *
 *
 *
 *

 * @constructor
 * @requires JQuery
 * @description Instantiate a WOWAPI object that can be used to call underlying API methods.
 * The data available through the API is limited to the region that it is in.
 * Hence, US APIs accessed through us.battle.net will only contain data within US battlegroups and realms.
 * @param {string=} [region="eu"] region Specifies the region that will be used for the API calls. May be <code>["us", "eu", "kr", "tw", "ch"]</code>.
 * @param {string=} [locale=First value from selected region] locale Specifies the locale to be used with the request.
 * Support for locales is limited to those supported on the World of Warcraft community sites.
 * Possible values are based on the region:  <code>{
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
 }</code>
 * @example <code>var wowApiInstance = new WOWAPI("eu", "en_GB");</code>
 */
function WOWAPI(region, locale) {
    'use strict';
    var allowedRegions = ["us", "eu", "kr", "tw", "ch"],
        allowedLocales = {
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
        },
        urlMappings = {
            "us": "us.battle.net",
            "eu": "eu.battle.net",
            "kr": "kr.battle.net",
            "tw": "tw.battle.net",
            "ch": "www.battlenet.com.cn"
        };
    if (allowedRegions.indexOf(region) > -1) {
        this.region = region;
        if (allowedLocales[region].indexOf(locale) > -1) {
            this.locale = locale;
        } else {
            this.locale = allowedLocales[region][0]
        }
    } else {
        this.region = "eu"
        this.locale = "en_GB"
    }
    this.API_URL = "http://" + urlMappings[this.region] + "/api/wow/";
}


WOWAPI.prototype = (function () {
//private methods
    /**
     * @private
     * @param path
     * This is private method use internally to call the official API
     */
    function apiCall(path, successCallback, errorCallback) {
        var url = this.API_URL + path;
        $.jsonp({
            url: url,
            dataType: "json",
            callbackParameter: "jsonp",
            success: function (data) {
                successCallback(data);
            },
            error: function (err, status) {
                if (errorCallback) {
                    errorCallback(err, status);
                }
            }
        });
    }


    return {
//public functions
        constructor: WOWAPI,
        /**
         * @public
         * @description Returns the achievement data for given achievement. {@linkcode http://blizzard.github.io/api-wow-docs/#achievement-api | Wraps this API function}
         * @param {Integer} achievementId The achievement number
         * @param {responseCallback} callbackFunction A callback function that will be triggered when we have the data
         * @example <code>wowApiInstance.getAchievement(2144, function(data) {console.log(data)});</code>
         */
        getAchievement: function (achievementId, callbackFunction) {
            return this._(apiCall)("achievement/" + achievementId, callbackFunction);
        },

        /**
         * @public
         * @description Returns the current auction house data for given realm. {@linkcode http://blizzard.github.io/api-wow-docs/#auction-api | Wraps this API function}
         * @param {String} realm The realm name
         * @param {responseCallback} callbackFunction A callback function that will be triggered when we have the data
         * @example <code>wowApiInstance.getAuctions('medivh', function(data) {console.log(data)});</code>
         */
        getAuctions: function (realm, callbackFunction) {
            return this._(apiCall)("auction/data/" + realm, callbackFunction);
        },

        /**
         * @public
         * @description Returns details about given ability id. {@linkcode http://blizzard.github.io/api-wow-docs/#battlepet-api/abilities | Wraps this API function}
         * @param {Integer} abilityId
         * @param {responseCallback} callbackFunction A callback function that will be triggered when we have the data
         * @example <code>wowApiInstance.getBattlePetAbility(640, function(data) {console.log(data)});</code>
         */
        getBattlePetAbility: function (abilityId, callbackFunction) {
            return this._(apiCall)("battlePet/ability/" + abilityId, callbackFunction);
        },

        /**
         * @public
         * @description Returns details about given species id. {@linkcode http://blizzard.github.io/api-wow-docs/#battlepet-api/species | Wraps this API function}
         * @param {Integer} speciesId
         * @param {responseCallback} callbackFunction A callback function that will be triggered when we have the data
         * @example <code>wowApiInstance.getBattlePetAbility(640, function(data) {console.log(data)});</code>
         */
        getBattlePetSpecies: function (speciesId, callbackFunction) {
            return this._(apiCall)("battlePet/species/" + speciesId, callbackFunction);
        },

        /**
         * @public
         * @description Returns details about given battle pet parameters. {@linkcode http://blizzard.github.io/api-wow-docs/#battlepet-api/stats | Wraps this API function}
         * @param {battlePetObject} speciesDetails
         * @param {responseCallback} callbackFunction A callback function that will be triggered when we have the data
         * @example <code><pre>
         wowApiInstance.getBattlePetStats({
             speciesId: 640,
             level: 25,
             breedId: 3,
             qualityId: 1
         }, function (data) {
            console.log(data);
         });</pre></code>
         */
        getBattlePetStats: function (speciesDetails, callbackFunction) {
            var speciesId = speciesDetails.speciesId,
                level = speciesDetails.level || 1,
                breedId = speciesDetails.breedId || 3,
                qualityId = speciesDetails.qualityId || 1;
            return this._(apiCall)("battlePet/stats/" + speciesId + "?level=" + level + "&breedId=" + breedId + "&qualityId=" + qualityId, callbackFunction);
        },

        /**
         * @public
         * @description Returns the current challenge mode leaderboard for given realm or for region. {@linkcode http://blizzard.github.io/api-wow-docs/#challenge-mode-api | Wraps this API function}
         * @param {(String|null)} realm The realm name. If it is null, it will return region leaderboard
         * @param {responseCallback} callbackFunction A callback function that will be triggered when we have the data
         * @example <code>wowApiInstance.getChallengeLeaderboard("steamwheedle-cartel", function (data) {console.log(data);});<br />
         * wowApiInstance.getChallengeLeaderboard(null, function (data) {console.log(data);});
         * </code>
         */
        getChallengeLeaderboard: function (realm, callbackFunction) {
            if (realm) {
                return this._(apiCall)("challenge/" + realm, callbackFunction);
            } else {
                return this._(apiCall)("challenge/region", callbackFunction);
            }
        },

        /**
         * @public
         * @description Returns character profile based on a characterOptions object. {@linkcode http://blizzard.github.io/api-wow-docs/#character-profile-api | Wraps this API function}
         * @param {characterOptions} characterOptions Contains the options describing what to retrieve
         * @param {responseCallback} callbackFunction A callback function that will be triggered when we have the data
         * @example <code>wowApiInstance.getCharacterProfile({realm: "steamwheedle-cartel",characterName: "HarapAlb"}, function (data) {console.log(data);});<br />
         * wowApiInstance.getCharacterProfile({realm: "steamwheedle-cartel",characterName: "HarapAlb",fields: "items"}, function (data) { console.log(data); });<br />
         * wowApiInstance.getCharacterProfile({realm: "steamwheedle-cartel", characterName: "HarapAlb", fields: "items, pets, stats, titles"}, function (data) {console.log(data);});<br />
         * </code>
         */
        getCharacterProfile: function (characterOptions, callbackFunction) {
            var fields = characterOptions.fields,
                realm = characterOptions.realm,
                characterName = characterOptions.characterName
            if (fields) {
                return this._(apiCall)("character/" + realm + "/" + characterName + "?fields=" + fields, callbackFunction);
            } else {
                return this._(apiCall)("character/" + realm + "/" + characterName, callbackFunction);
            }
        },

        /**
         * @public
         * @description Returns details about given item id. {@linkcode http://blizzard.github.io/api-wow-docs/#item-api/individual-item | Wraps this API function}
         * @param {Integer} itemId
         * @param {responseCallback} callbackFunction A callback function that will be triggered when we have the data
         * @example <code>wowApiInstance.getItem(18803, function(data) {console.log(data)});</code>
         */
        getItem: function (itemId, callbackFunction) {
            return this._(apiCall)("item/" + itemId, callbackFunction);
        },

        /**
         * @public
         * @description Returns details about given item set id. {@linkcode http://blizzard.github.io/api-wow-docs/#item-api/item-set | Wraps this API function}
         * @param {Integer} setId
         * @param {responseCallback} callbackFunction A callback function that will be triggered when we have the data
         * @example <code>wowApiInstance.getItem(1060, function(data) {console.log(data)});</code>
         */
        getIemSet: function (setId, callbackFunction) {
            return this._(apiCall)("item/set/" + setId, callbackFunction);
        },

        /**
         * @public
         * @description Returns guild profile based on a guildOptions object. {@linkcode http://blizzard.github.io/api-wow-docs/#guild-profile-api | Wraps this API function}
         * @param {guildOptions} guildOptions Contains the options describing what to retrieve
         * @param {responseCallback} callbackFunction A callback function that will be triggered when we have the data
         * @example <code><pre>
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
         * </pre></code>
         */
        getGuildProfile: function (guildOptions, callbackFunction) {
            var fields = guildOptions.fields,
                realm = guildOptions.realm,
                guildName = guildOptions.guildName;
            if (fields) {
                return this._(apiCall)("guild/" + realm + "/" + guildName + "?fields=" + fields, callbackFunction);
            } else {
                return this._(apiCall)("guild/" + realm + "/" + guildName, callbackFunction);
            }
        },

        /**
         * @public
         * @description Returns the PVP leaderboard for given bracket. {@linkcode http://blizzard.github.io/api-wow-docs/#pvp-api | Wraps this API function}
         * @param {String} bracket The bracket for the leaderborad. One of: "2v2" | "3v3" | "5v5" | "rbg"
         * @param {responseCallback} callbackFunction A callback function that will be triggered when we have the data
         * @example <code>wowApiInstance.getPVPLeaderboard("3v3", function (data) { console.log(data); });</code>
         */
        getPVPLeaderboard: function (bracket, callbackFunction) {
            return this._(apiCall)("leaderboard/" + bracket, callbackFunction);
        },

        /**
         * @public
         * @description Returns the realm(s) status. {@linkcode http://blizzard.github.io/api-wow-docs/#realm-status-api | Wraps this API function}
         * @param {String|null} realms The list of realms to get status, or null for all realms from region
         * @param {responseCallback} callbackFunction A callback function that will be triggered when we have the data
         * @example <code><pre>
          wowApiInstance.getRealmStatus(null, function (data) {
             console.log(data);
          });<br />
          wow.getRealmStatus("steamwheedle-cartel,medivh", function (data) {
             console.log(data);
          });
         * </pre></code>
         */
        getRealmStatus: function (realms, callbackFunction) {
            if (realms) {
                return this._(apiCall)("realm/status?realms=" + realms, callbackFunction);
            } else {
                return this._(apiCall)("realm/status", callbackFunction);
            }
        },

        /**
         * @public
         * @description Returns details about given recipe id. {@linkcode http://blizzard.github.io/api-wow-docs/#recipe-api | Wraps this API function}
         * @param {Integer} recipeId
         * @param {responseCallback} callbackFunction A callback function that will be triggered when we have the data
         * @example <code>wowApiInstance.getRecipe(33994, function(data) {console.log(data)});</code>
         */
        getRecipe: function (recipeId, callbackFunction) {
            return this._(apiCall)("recipe/" + recipeId, callbackFunction);
        },

        /**
         * @public
         * @description Returns details about spell recipe id. {@linkcode http://blizzard.github.io/api-wow-docs/#spell-api | Wraps this API function}
         * @param {Integer} spellId
         * @param {responseCallback} callbackFunction A callback function that will be triggered when we have the data
         * @example <code>wowApiInstance.getSpell(8056, function(data) {console.log(data)});</code>
         */
        getSpell: function (spellId, callbackFunction) {
            return this._(apiCall)("spell/" + spellId, callbackFunction);
        },

        getBattlegroups: function (callbackFunction) {
            if (this.battlegroups) {
                callbackFunction(this.battlegroups);
            } else {
                return this._(apiCall)("/api/wow/data/battlegroups/");
            }
        },

        /**
         * @param callback
         * @return {Function}
         * @private
         */
        _: function (callback) {
            var self = this;
            return function () {
                return callback.apply(self, arguments);
            };
        }
    };
    /**
     * @callback responseCallback
     * @param {JSON} data JSON containing requested data
     * */

    /**
     * @typedef {Object} battlePetObject
     * @property  {Integer} speciesId SpeciesId for what we want the stats
     * @property  {Integer=} [level=1] Level of the pet to display stats
     * @property  {Integer=} [breedId=3] Specify the breed
     * @property  {Integer=} [qualityId=1] Specify quality
     */

    /**
     * @typedef {Object} characterOptions
     * @property  {String} realm Realm name
     * @property  {String} characterName Character name
     * @property  {String=} [fields=""] String with one or more fields from the profile separated by comma.
     * If it is missing, only the summary will be returned.
     * Possible values:
     * <pre>
     * achievements    A map of achievement data including completion timestamps and criteria information.
     * appearance    A map of values that describes the face, features and helm/cloak display preferences and attributes.
     * feed    The activity feed of the character.
     * guild    A summary of the guild that the character belongs to. If the character does not belong to a guild and this field is requested, this field will not be exposed.
     * hunterPets    A list of all of the combat pets obtained by the character.
     * items    A list of items equiped by the character. Use of this field will also include the average item level and average item level equipped for the character.
     * mounts    A list of all of the mounts obtained by the character.
     * pets    A list of the battle pets obtained by the character.
     * petSlots    Data about the current battle pet slots on this characters account.
     * professions    A list of the character's professions. It is important to note that when this information is retrieved, it will also include the known recipes of each of the listed professions.
     * progression    A list of raids and bosses indicating raid progression and completedness.
     * pvp    A map of pvp information including arena team membership and rated battlegrounds information.
     * quests    A list of quests completed by the character.
     * reputation    A list of the factions that the character has an associated reputation with.
     * stats    A map of character attributes and stats.
     * talents    A list of talent structures.
     * titles    A list of the titles obtained by the character including the currently selected title.
     </pre>
     */

    /**
     * @typedef {Object} guildOptions
     * @property  {String} realm Realm name
     * @property  {String} guildName Guild name
     * @property  {String=} [fields=""] String with one or more fields from the profile separated by comma.
     * If it is missing, only the summary will be returned.
     * Possible values:
     * <pre>
     * members    A list of characters that are a member of the guild
     * achievements    A set of data structures that describe the achievements earned by the guild.
     * news    A set of data structures that describe the news feed of the guild.
     * challenge    The top 3 challenge mode guild run times for each challenge mode map.
     </pre>
     */


})();

$(function () {
    /*
     * jQuery JSONP Core Plugin 2.4.0 (2012-08-21)
     *
     * https://github.com/jaubourg/jquery-jsonp
     *
     * Copyright (c) 2012 Julian Aubourg
     *
     * This document is licensed as free software under the terms of the
     * MIT License: http://www.opensource.org/licenses/mit-license.php
     */
    (function ($) {

        // ###################### UTILITIES ##

        // Noop
        function noop() {
        }

        // Generic callback
        function genericCallback(data) {
            lastValue = [ data ];
        }

        // Call if defined
        function callIfDefined(method, object, parameters) {
            return method && method.apply(object.context || object, parameters);
        }

        // Give joining character given url
        function qMarkOrAmp(url) {
            return /\?/.test(url) ? "&" : "?";
        }

        var // String constants (for better minification)
            STR_ASYNC = "async",
            STR_CHARSET = "charset",
            STR_EMPTY = "",
            STR_ERROR = "error",
            STR_INSERT_BEFORE = "insertBefore",
            STR_JQUERY_JSONP = "_jqjsp",
            STR_ON = "on",
            STR_ON_CLICK = STR_ON + "click",
            STR_ON_ERROR = STR_ON + STR_ERROR,
            STR_ON_LOAD = STR_ON + "load",
            STR_ON_READY_STATE_CHANGE = STR_ON + "readystatechange",
            STR_READY_STATE = "readyState",
            STR_REMOVE_CHILD = "removeChild",
            STR_SCRIPT_TAG = "<script>",
            STR_SUCCESS = "success",
            STR_TIMEOUT = "timeout",

        // Window
            win = window,
        // Deferred
            Deferred = $.Deferred,
        // Head element
            head = $("head")[ 0 ] || document.documentElement,
        // Page cache
            pageCache = {},
        // Counter
            count = 0,
        // Last returned value
            lastValue,

        // ###################### DEFAULT OPTIONS ##
            xOptionsDefaults = {
                //beforeSend: undefined,
                //cache: false,
                callback: STR_JQUERY_JSONP,
                //callbackParameter: undefined,
                //charset: undefined,
                //complete: undefined,
                //context: undefined,
                //data: "",
                //dataFilter: undefined,
                //error: undefined,
                //pageCache: false,
                //success: undefined,
                //timeout: 0,
                //traditional: false,
                url: location.href
            },

        // opera demands sniffing :/
            opera = win.opera,

        // IE < 10
            oldIE = !!$("<div>").html("<!--[if IE]><i><![endif]-->").find("i").length;

        // ###################### MAIN FUNCTION ##
        function jsonp(xOptions) {

            // Build data with default
            xOptions = $.extend({}, xOptionsDefaults, xOptions);

            // References to xOptions members (for better minification)
            var successCallback = xOptions.success,
                errorCallback = xOptions.error,
                completeCallback = xOptions.complete,
                dataFilter = xOptions.dataFilter,
                callbackParameter = xOptions.callbackParameter,
                successCallbackName = xOptions.callback,
                cacheFlag = xOptions.cache,
                pageCacheFlag = xOptions.pageCache,
                charset = xOptions.charset,
                url = xOptions.url,
                data = xOptions.data,
                timeout = xOptions.timeout,
                pageCached,

            // Abort/done flag
                done = 0,

            // Life-cycle functions
                cleanUp = noop,

            // Support vars
                supportOnload,
                supportOnreadystatechange,

            // Request execution vars
                firstChild,
                script,
                scriptAfter,
                timeoutTimer;

            // If we have Deferreds:
            // - substitute callbacks
            // - promote xOptions to a promise
            Deferred && Deferred(function (defer) {
                defer.done(successCallback).fail(errorCallback);
                successCallback = defer.resolve;
                errorCallback = defer.reject;
            }).promise(xOptions);

            // Create the abort method
            xOptions.abort = function () {
                !( done++ ) && cleanUp();
            };

            // Call beforeSend if provided (early abort if false returned)
            if (callIfDefined(xOptions.beforeSend, xOptions, [ xOptions ]) === !1 || done) {
                return xOptions;
            }

            // Control entries
            url = url || STR_EMPTY;
            data = data ? ( (typeof data) == "string" ? data : $.param(data, xOptions.traditional) ) : STR_EMPTY;

            // Build final url
            url += data ? ( qMarkOrAmp(url) + data ) : STR_EMPTY;

            // Add callback parameter if provided as option
            callbackParameter && ( url += qMarkOrAmp(url) + encodeURIComponent(callbackParameter) + "=?" );

            // Add anticache parameter if needed
            !cacheFlag && !pageCacheFlag && ( url += qMarkOrAmp(url) + "_" + ( new Date() ).getTime() + "=" );

            // Replace last ? by callback parameter
            url = url.replace(/=\?(&|$)/, "=" + successCallbackName + "$1");

            // Success notifier
            function notifySuccess(json) {

                if (!( done++ )) {

                    cleanUp();
                    // Pagecache if needed
                    pageCacheFlag && ( pageCache [ url ] = { s: [ json ] } );
                    // Apply the data filter if provided
                    dataFilter && ( json = dataFilter.apply(xOptions, [ json ]) );
                    // Call success then complete
                    callIfDefined(successCallback, xOptions, [ json , STR_SUCCESS, xOptions ]);
                    callIfDefined(completeCallback, xOptions, [ xOptions , STR_SUCCESS ]);

                }
            }

            // Error notifier
            function notifyError(type) {

                if (!( done++ )) {

                    // Clean up
                    cleanUp();
                    // If pure error (not timeout), cache if needed
                    pageCacheFlag && type != STR_TIMEOUT && ( pageCache[ url ] = type );
                    // Call error then complete
                    callIfDefined(errorCallback, xOptions, [ xOptions , type ]);
                    callIfDefined(completeCallback, xOptions, [ xOptions , type ]);

                }
            }

            // Check page cache
            if (pageCacheFlag && ( pageCached = pageCache[ url ] )) {

                pageCached.s ? notifySuccess(pageCached.s[ 0 ]) : notifyError(pageCached);

            } else {

                // Install the generic callback
                // (BEWARE: global namespace pollution ahoy)
                win[ successCallbackName ] = genericCallback;

                // Create the script tag
                script = $(STR_SCRIPT_TAG)[ 0 ];
                script.id = STR_JQUERY_JSONP + count++;

                // Set charset if provided
                if (charset) {
                    script[ STR_CHARSET ] = charset;
                }

                opera && opera.version() < 11.60 ?
                    // onerror is not supported: do not set as async and assume in-order execution.
                    // Add a trailing script to emulate the event
                    ( ( scriptAfter = $(STR_SCRIPT_TAG)[ 0 ] ).text = "document.getElementById('" + script.id + "')." + STR_ON_ERROR + "()" )
                    :
                    // onerror is supported: set the script as async to avoid requests blocking each others
                    ( script[ STR_ASYNC ] = STR_ASYNC )

                ;

                // Internet Explorer: event/htmlFor trick
                if (oldIE) {
                    script.htmlFor = script.id;
                    script.event = STR_ON_CLICK;
                }

                // Attached event handlers
                script[ STR_ON_LOAD ] = script[ STR_ON_ERROR ] = script[ STR_ON_READY_STATE_CHANGE ] = function (result) {

                    // Test readyState if it exists
                    if (!script[ STR_READY_STATE ] || !/i/.test(script[ STR_READY_STATE ])) {

                        try {

                            script[ STR_ON_CLICK ] && script[ STR_ON_CLICK ]();

                        } catch (_) {
                        }

                        result = lastValue;
                        lastValue = 0;
                        result ? notifySuccess(result[ 0 ]) : notifyError(STR_ERROR);

                    }
                };

                // Set source
                script.src = url;

                // Re-declare cleanUp function
                cleanUp = function (i) {
                    timeoutTimer && clearTimeout(timeoutTimer);
                    script[ STR_ON_READY_STATE_CHANGE ] = script[ STR_ON_LOAD ] = script[ STR_ON_ERROR ] = null;
                    head[ STR_REMOVE_CHILD ](script);
                    scriptAfter && head[ STR_REMOVE_CHILD ](scriptAfter);
                };

                // Append main script
                head[ STR_INSERT_BEFORE ](script, ( firstChild = head.firstChild ));

                // Append trailing script if needed
                scriptAfter && head[ STR_INSERT_BEFORE ](scriptAfter, firstChild);

                // If a timeout is needed, install it
                timeoutTimer = timeout > 0 && setTimeout(function () {
                    notifyError(STR_TIMEOUT);
                }, timeout);

            }

            return xOptions;
        }

        // ###################### SETUP FUNCTION ##
        jsonp.setup = function (xOptions) {
            $.extend(xOptionsDefaults, xOptions);
        };

        // ###################### INSTALL in jQuery ##
        $.jsonp = jsonp;

    })(jQuery);
});