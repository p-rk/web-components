import { Component, Host, h, Event, EventEmitter, Prop } from '@stencil/core';


interface CandidateDetails {
  name: string;
  email: string;
}

@Component({
	tag: 'candidate-header',
	styleUrl: 'candidate-header.css',
	shadow: true,
})
export class CandidateHeader {
  @Prop() candidateInfo: CandidateDetails;
  @Prop() reqId: string;

  @Event({
    eventName: 'openJobDescription',
    composed: true,
    cancelable: true,
    bubbles: true,
  }) jobDescription: EventEmitter<boolean>;

	handleJobDescModal() {
		console.log('clicked')
		 this.jobDescription.emit(true)
	}

	render() {
    console.log(typeof this.candidateInfo)
		return (
			<Host>
				<div>
					<p class="candidate-name">{this?.candidateInfo?.name}</p>
					<p>
						<a href="mailto:dummy@test.com">{this?.candidateInfo?.email}</a>
					</p>
					<span> Requisition ID: {this.reqId} </span>
          <button class="inline-button"
            onClick={() => this.handleJobDescModal()}>View job description</button>
          <div>
            <button class="inline-button"
              onClick={() => this.handleJobDescModal()}>View notes</button>
          </div>
				 </div>
			</Host>
		);
	}

}






