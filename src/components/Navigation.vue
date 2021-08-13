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

                    <div id="myTabContent" class="tab-content">
                        <div id="liveAndUpcoming" class="tab-pane fade show active">
                            <div class="d-flex flex-wrap align-items-center justify-content-between items-row">
                                <div class="column">
                                    <a class="text-uppercase d-inline-flex align-items-center" href="#">
                                        <span>LIVE</span> 2ND TEST
                                    </a>
                                </div>
                                <div class="column flex-shrink-0">
                                    <div class="text-center mb-2">
                                        <p class="small mb-0">Lord's, London, London</p>
                                        <p class="small mb-0">12 Aug, 21 Local Time, London, London</p>
                                    </div>
                                    <div class="d-flex align-items-center">
                                        <div class="d-inline-flex align-items-center">
                                            <div class="text-end me-3">
                                                <p class="fw-bold mb-0">England</p>
                                                <h5 class="mb-0">*276/3 (90 ov)</h5>
                                            </div>
                                            <img alt="" class="img-fluid" height="40" src="" width="40">
                                        </div>
                                        <p class="fw-bold mx-3 mb-0">VS</p>
                                        <div class="d-inline-flex align-items-center">
                                            <img alt="" class="img-fluid" height="40" src="img/india.png" width="40">
                                            <div class="ms-3">
                                                <p class="fw-bold mb-0">India</p>
                                                <h5 class="mb-0">Not yet Bat</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="column">
                                    <h6 class="fw-bolder mb-0">4:15 PM</h6>
                                </div>
                            </div>

                            <div class="text-center mt-4">
                                <button class="btn btn-load-more" type="button">LOAD MORE +</button>
                            </div>
                        </div>
                        <div id="result" class="tab-pane fade">
                            <div class="d-flex flex-column align-items-center justify-content-center"
                                 style="min-height: 450px;">
                                <img alt="" class="img-fluid" src="img/empty.png" width="350">
                                <h2 class="text-center">This area of the page is under construction</h2>
                            </div>
                        </div>
                        <div id="calendar" class="tab-pane fade">
                            <div class="d-flex flex-column align-items-center justify-content-center"
                                 style="min-height: 450px;">
                                <img alt="" class="img-fluid" src="img/empty.png" width="350">
                                <h2 class="text-center">This area of the page is under construction</h2>
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

export default {
    name: "Navigation",

    data() {
        return {
            matches: []
        }
    },
    created() {
        this.getMatches();
    },

    methods: {
        getMatches() {
            axios.get('matches/?status=2&format=6&token='+ this.$accessToken + '&per_page=10&paged=1').then(({data}) =>{
                this.matches = data.response.items;
                console.log(this.matches);
            }).catch(()=>{
            })
        }
    }

}
</script>