/**
 * Instantiate a WOWAPI object that can be used to call underlying API methods
 * The data available through the API is limited to the region that it is in.
 * Hence, US APIs accessed through us.battle.net will only contain data within US battlegroups and realms.
 * Support for locales is limited to those supported on the World of Warcraft community sites.
 * @param region String specifies the region that will be used for the API calls. May be <code>"us", "eu", "kr", "tw", "ch"</code>.
 * @default "eu"
 * @param locale String specifies the locale to be used with the request. Possible values are based on the region:
 * <code>
 *     {
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
 "kr": "ko_KR",
 "tw": "zh_TW",
 "ch": "zh_CN"
 }
 *  </code>
 Firs value for each region is default if not specified
 * @constructor
 */
function WOWAPI(region, locale) {
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
        }
    if (allowedRegions.indexOf(region) > -1) {
        this.region = region;
        if (allowedLocales[region].indexOf(locale) > -1) {
            this.locale = locale
        } else {
            this.locale = allowedLocales[region][0]
        }
    } else {
        this.region = "eu"
        this.locale = "en_GB"
    }
    this.API_URL = "http://" + urlMappings[this.region] + "/api/wow/"


}
;


WOWAPI.prototype = (function () {
//private methods
    /**
     * @private
     * @param path
     */
    function apiCall(path, successCallback, errorCallback) {
        console.log(path)
        var url = this.API_URL + path;
        console.log(url)
        $.jsonp({
            url: url,
            dataType: "json",
            callbackParameter: "jsonp",
            success: function (data) {
                successCallback(data)
            },
            error: function (err, status) {
                if (errorCallback) {
                    errorCallback(err, status);
                }
            }
        });
    }

//public functions
    return {

        constructor: WOWAPI,

        /**
         *
         * @param achievementId Integer the achievement number
         * @return {JSON object describing the achievement}
         */
        getAchievement: function (achievementId, cbk) {
            return this._(apiCall)("achievement/" + achievementId, cbk);
        },

        /**
         *
         * @param realm String the realm name
         * @return {JSON object with the content of the AH for given realm}
         */
        getAuctions: function (realm, cbk) {
            return this._(apiCall)("auction/data/" + realm, cbk);
        },

        /**
         *
         * @param abilityId
         * @param cbk
         * @return {*}
         */
        getBattlePetAbility: function (abilityId, cbk) {
            return this._(apiCall)("battlePet/ability/" + abilityId, cbk);
        },


        getBattlePetSpecies: function (speciesId, cbk) {
            return this._(apiCall)("battlePet/species/" + speciesId, cbk);
        },

        getBattlePetStats: function (speciesDetails, cbk) {
            var speciesId = speciesDetails.speciesId,
                level = speciesDetails.level || 1,
                breedId = speciesDetails.breedId || 3,
                qualityId = speciesDetails.qualityId || 1;
            return this._(apiCall)("battlePet/stats/" + speciesId + "?level=" + level + "&breedId=" + breedId + "&qualityId=" + qualityId, cbk);
        },

        getChallengeLeaderboard: function (realm, cbk) {
            if (realm) {
                return this._(apiCall)("challenge/" + realm, cbk);
            } else {
                return this._(apiCall)("challenge/region", cbk);
            }
        },

        /**
         * @required
         * @param characterOptions Object containing requested character with 3 fields:
         * @required
         * realm String realm name
         * @required
         * characterName
         * @optional
         * fields String with one or more fields from the profile. If it is missing, only the summary will be returned.
         * @values
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
         *
         * @param cbk
         * @return {*}
         */
        getCharacterProfile: function (characterOptions, cbk) {
            var fields = characterOptions.fields,
                realm = characterOptions.realm,
                characterName = characterOptions.characterName
            if (fields) {
                return this._(apiCall)("character/" + realm + "/" + characterName + "?fields=" + fields, cbk);
            } else {
                return this._(apiCall)("character/" + realm + "/" + characterName, cbk);
            }
        },

        getItem: function (itemId, cbk) {
            return this._(apiCall)("item/" + itemId, cbk);
        },

        getIemSet: function (setId, cbk) {
            return this._(apiCall)("item/set/" + setId, cbk);
        },

        /**
              * @required
              * @param guildOptions Object containing requested guild with 3 fields:
              * @required
              * realm String realm name
              * @required
              * guildName
              * @optional
              * fields String with one or more fields from the profile. If it is missing, only the summary will be returned.
              * @values
                 members	A list of characters that are a member of the guild
                 achievements	A set of data structures that describe the achievements earned by the guild.
                 news	A set of data structures that describe the news feed of the guild.
                 challenge	The top 3 challenge mode guild run times for each challenge mode map.
              *
              * @param cbk
              * @return {*}
              */
        getGuildProfile: function (guildOptions, cbk) {
            var fields = guildOptions.fields,
                realm = guildOptions.realm,
                guildName = guildOptions.guildName
            if (fields) {
                return this._(apiCall)("guild/" + realm + "/" + guildName + "?fields=" + fields, cbk);
            } else {
                return this._(apiCall)("guild/" + realm + "/" + guildName, cbk);
            }
        },

        /**
         * @required
         * @param bracket String The bracket for the leaderborad. One of: "2v2" | "3v3" | "5v5" | "rbg"
         * @param cbk
         * @return {*}
         */
        getPVPLeaderboard: function(bracket, cbk) {
            return this._(apiCall)("leaderboard/" + bracket, cbk);
        },


        _: function (callback) {
            var self = this;
            return function () {
                return callback.apply(self, arguments);
            };
        }
    };
})
    ();

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