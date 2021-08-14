<template>
    <div class="container">
        <div class="content-wrapper">
            <div class="row justify-content-center w-100">
                <div class="col-lg-10">
                    <div class="tab-header">
                        <ul id="myTab" class="nav nav-tabs" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button aria-selected="true"
                                        class="nav-link active"
                                        data-bs-target="#liveAndUpcoming"
                                        data-bs-toggle="tab"
                                        type="button">
                                    Live & Upcoming
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button aria-selected="false"
                                        class="nav-link"
                                        data-bs-target="#result"
                                        data-bs-toggle="tab"
                                        type="button">
                                    Result
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button aria-selected="false"
                                        class="nav-link"
                                        data-bs-target="#calendar"
                                        data-bs-toggle="tab"
                                        type="button">
                                    Calendar
                                </button>
                            </li>
                        </ul>
                        <ul class="nav">
                            <li>
                                <div class="dropdown me-2">
                                    <button aria-expanded="false"
                                            class="btn dropdown-toggle"
                                            data-bs-toggle="dropdown"
                                            type="button">
                                        International
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div class="dropdown">
                                    <button aria-expanded="false"
                                            class="btn dropdown-toggle"
                                            data-bs-toggle="dropdown"
                                            type="button">
                                        Dropdown button
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div id="myTabContent" class="tab-content" >
                        <div id="liveAndUpcoming" class="tab-pane fade show active">
                            <div class="d-flex flex-wrap align-items-center justify-content-between items-row" v-for="(match, index) in matches" :key="index">
                                <div class="column">
                                    <a class="text-uppercase d-inline-flex align-items-center" href="#">
                                        <span>{{ match.competition.status }}</span> {{ match.subtitle}}
                                    </a>
                                </div>
                                <div class="column flex-shrink-0">
                                    <div class="text-center mb-2">
                                        <p class="small mb-0">{{ match.venue.name }}</p>
                                        <p class="small mb-0">{{dateConvert(match.date_start)}}, {{match.venue.location}}</p>
                                    </div>
                                    <div class="d-flex align-items-center">
                                        <div class="d-inline-flex align-items-center">
                                            <div class="text-end me-3">
                                                <p class="fw-bold mb-0">{{match.teama.name}}</p>
                                                <h5 class="mb-0">*{{match.teama.scores_full}}</h5>
                                            </div>
                                            <img alt="" :src="`${match.teama.logo_url}`" class="img-fluid" height="40" width="40">
                                        </div>
                                        <p class="fw-bold mx-3 mb-0">VS</p>
                                        <div class="d-inline-flex align-items-center">
                                            <img alt="" class="img-fluid" height="40" :src="`${match.teamb.logo_url}`" width="40">
                                            <div class="ms-3">
                                                <p class="fw-bold mb-0">{{match.teamb.name}}</p>
                                                <h5 class="mb-0">{{match.teamb.scores_full}}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="column">
                                    <h6 class="fw-bolder mb-0">{{formatAMPM(match.date_start)}}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import axios from "axios";
import {dateConvert, formatAMPM} from "../assets/js/helpers";

export default {
    name: "Navigation",

    data() {
        return {
            matches: [],
            dateConvert,
            formatAMPM
        }
    },
    created() {
        this.getMatches();
    },

    methods: {
        getMatches() {
            axios.get('matches/?status=2&format=6&token='+ this.$accessToken + '&per_page=10&paged=1').then(({data}) =>{
                this.matches = data.response.items;

            }).catch(()=>{
            })
        },
    }

}
</script>