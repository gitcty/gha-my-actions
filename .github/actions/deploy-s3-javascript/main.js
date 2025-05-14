const core= require('@actions/core');
const github= require('@actions/github');
const exec= require('@actions/exec');

function run() {
    // 1) Get input values for actions
    const s3bucket = core.getInput('s3bucket', {required: true});
    const region = core.getInput('region', {required:true});
    const distfolder = core.getInput('dist-folder', {required: true});

    // 2) Upload files
    const s3URI = `s3:\\${s3bucket}`;

    exec.exec(`aws s3 sync ${distfolder} ${s3URI} --region ${region}`);


    core.notice('Hello from my custom js action')
}

run();