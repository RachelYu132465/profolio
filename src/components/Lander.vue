<template>
    <div>
        <!-- lander section -->
        <section class="section">
            <div class="container-fliud">
                <img alt="Vue logo" class="rounded-circle img-profile" src="https://www.linkpicture.com/q/IMAG1073.jpg">
                <h1>Software Developer</h1>
                <p>learn to serve, share to build, connect for good.</p>
                <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target=".bd-example-modal-lg">Contact</button>
                
            </div>
        </section>

        <!-- portfolio section -->
        <section class="protfolio">
            <h1>Portfolio</h1>
           
            <div class="container">
                <div class="row">

                    <div class="col-md-4">
                            <div class="card">
                                <div class="card-head">
                                    <img alt="Vue logo" class="rounded-circle img-custome" src="https://donaldold.com/wp-content/uploads/2020/04/webdesign-3411373_640.jpg">
                                    <h2>Experiences
</h2>
                                </div>
                                <hr>
                                <div class="card-body">
                                    <p>
                                      2019 - present
Administrative assistant
Japan-Taiwan Homestay Association 
2018-2019 
Administrative assistant Contract Employee for 1 years
International Patent & Law Office in Taiwan
2017 -2018
freelance translator
Assistant for a resort in Guam

                                    </p>
                                    <button type="button" class="btn btn-outline-secondary">More</button>
                                </div>
                            </div>
                            <br>
                    </div>

                    <div class="col-md-4">
                            <div class="card">
                                <div class="card-head">
                                    <img alt="Vue logo" class="rounded-circle img-custome" src="https://i.pinimg.com/originals/4a/70/56/4a70563234301578c158dc142384a1c3.png">
                                    <h2>web project</h2>
                                </div>
                                <hr>
                                <div class="card-body">
                                    <p>
                                        Computer literate and adaptable, tools including but not limited to:
Google's product
Using Bat file for automation
Microsoft Office Suite
Adobe Photoshop, Illustrator

                                    </p>
                                    <button type="button" class="btn btn-outline-secondary">More</button>
                                </div>
                            </div>
                        <br>
                    </div>  

                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-head">
                                <img alt="Vue logo" class="rounded-circle img-custome" src="https://cdn.mos.cms.futurecdn.net/wH5y2PkWhCxqKBje8rBp5e.jpg">
                                <h2>education</h2>
                            </div>
                            <hr>
                            <div class="card-body">
                                <p>
                                 B.A. in  Political Science
The Department of Political Science
National Cheng Kung University

                                </p>
                                <button type="button" class="btn btn-outline-secondary">More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- modal for contact -->
        
        <section class="">
            <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <talk/>
                    </div>
                </div>
            </div>
        </section>
        
    </div>
</template>

<script lang="ts">
import talk from './Contact.vue'
export default {
    name:'Lander',
    components:{
        talk
    }  
}
</script>

<style lang="css" scoped>
    .section{
        padding-top: 10%;
        padding-bottom: 10%;
    }

    .protfolio{
        background-color: #34345238;
        padding-top: 8%;
        padding-bottom: 15%;
        /* padding:15% */
    }

    .img-profile{
        width: 140px;
        height: 220px;
        margin-top: 15px;
    }

    .img-custome{
        width: 140px;
        height: 140px;
        margin-top: 15px;
    }
</style>