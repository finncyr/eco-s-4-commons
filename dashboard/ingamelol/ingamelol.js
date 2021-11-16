const teamnameInputL = document.querySelector('#teamInputL');
const teamnameInputR = document.querySelector('#teamInputR');
const submitButton = document.querySelector('#submitButton');
const swapButton = document.querySelector("#swapbutton");

const teamnameReplicantL = nodecg.Replicant('teamnameL');
const teamnameReplicantR = nodecg.Replicant('teamnameR');

teamnameReplicantL.on('change', (newValue, oldValue) => {
    teamnameInputL.value = newValue;
});
teamnameReplicantR.on('change', (newValue, oldValue) => {
    teamnameInputR.value = newValue;
});

submitButton.onclick = () => {
    // A Replicant can be modified by modifying its `value`.
    teamnameReplicantL.value = teamnameInputL.value;
    teamnameReplicantR.value = teamnameInputR.value;
};

swapButton.onclick = () => {
    const temp = nodecg.Replicant('temp');
    temp.value = teamnameReplicantL.value;
    teamnameReplicantL.value = teamnameReplicantR.value;
    teamnameReplicantR.value = temp.value;
};