---
id: vote-a-core-developer
title: Vote a new committer or PPMC member
---

Kvrocks PPMC member should be responsible for assessing the contributions of candidates.

Like many Apache projects, Kvrocks welcome all contributions, including code contributions, documentation improvement, blog entries, guides for new users, public speeches, and enhancement of the project in various ways.

## Nominate new committer

New committer nomination could only be officially started by existing PPMC members. If a new committer feels that he/she is qualified, he/she should contact any existing PPMC member and discuss.
If this is agreed among some members of the PPMC, the process will kick off.

## Initiate discussion in the community private mailing group

Any Kvrocks PPMC member can initiate a voting discussion.

After PPMC finds any valuable contributions from community contributors and obtains the consent of the candidate, they can initiate a discussion on Kvrocks' private mailing list.

In the discussion email, the proposer should clearly state the candidate's contributions and give the address for reviewing the corresponding contributions, so that everyone can discuss and analyze it. The discussion email is sent to `private@kvrocks.apache.org`. The discussion will last at least 72 hours. PPMC members will fully express their views on the proposed email.

The following is a sample discussion email:

```text
[DISCUSS] XXXXXX for Kvrocks [committer|PPMC member]

I nominate XXXXXX as an Kvrocks [committer|PPMC member]

Judging from the contributions in recent months, XXXXXX has submitted many
implementations[1][2] to the project and improved the management module for
the project.

During the optimization and improvement period of the project, it is hoped that
more people will participate in the actual project optimization and improvement,
to let the project more perfect and easier to use.

So I nominated XXXXXX as a [committer|PPMC member] of the Kvrocks project.

[1] https://github.com/apache/incubator-kvrocks/issues/created_by/XXXXXX
[2] https://github.com/apache/incubator-kvrocks/commits?author=XXXXXX
```

## Initiate vote in the community private mailing group

If the discussion email does not receive the disagreement information within the specified time, the poll initiator needs to initiate a Committer or PPMC election vote on Kvrocks' private mailing list.

The voting email is sent to `private@kvrocks.apache.org` for at least 72 hours, and at least 3 votes +1 passed; if less than 3 votes or 1 veto (-1 vote), the vote will fail; if a veto is initiated, the voter needs to EXPLAIN the reason for the veto clearly so that everyone can understand and know. A veto without explanation does not count.

The following is a sample poll email:

```text
[VOTE] XXXXXX as a Kvrocks [Committer|PPMC member]

Judging from contributions in recent months, XXXXXX has submitted many
implementations[1][2] to the project and improved the management module for
the project.

During the optimization and improvement period of the project, it is hoped that
more people will participate in the actual project optimization and improvement,
to let the project more perfect and easier to use.

I think making him/her a [committer|PPMC member] will be a recognition of his/her
outstanding work for Kvrocks. So, I am happy to call VOTE to accept XXXXXX as a
Kvrocks [committer|PPMC member]

Voting will continue for at least 72 hours or until the required number of votes is reached.

Please vote accordingly:

 [ ] +1 approve
 [ ] +0 no opinion
 [ ] -1 disapprove with the reason

Here are some links to his/her contributions to Kvrocks:

[1] Issues: https://github.com/apache/incubator-kvrocks/issues/created_by/XXXXXX
[2] PRs   : https://github.com/apache/incubator-kvrocks/pulls/created_by/XXXXXX
```

## Feedback on voting results

After the voting email is over, the initiator of the vote needs to remind the voting end in the second [VOTE] email; at the same time, the initiator of the vote needs to initiate a vote summary email, and the summary email is sent to `private@kvrocks.apache.org`.

The following is a sample vote summary email:

```text
[RESULTS][VOTE] XXXXXX as a Kvrocks[committer|PPMC member]

Hi everyone,

The vote for "XXXXXX as a Kvrocks [committer/PPMC member]" has PASSED and closed now.

The result is as follows:

3 PPMC members +1 Votes
- aaa
- bbb
- ccc

Vote thread: https://lists.apache.org/thread/aaaaaxxxx

Then I'm going to invite XXXXXX to join us.

Thanks for everyone's support!
```

Note: If it is not passed, the result is "The vote for "XXXXXX as a Kvrocks [committer|PPMC member]" has FAILED and closed now."

## Newly added PPMC member notification email

This step is only processed for the PPMC member that passed the vote. If the election is Committer, this step is skipped and not executed.

Voting initiators need to send notification emails to Board's mailing group and wait at least 72 hours; email owners send `private@incubator.apache.org` and CC `private@kvrocks.apache.org`; Board will analyze compliance Until there is no doubt.

The following is an example of a new PPMC notification email:

```text
[NOTICE] XXXXXX for Apache Kvrocks(incubating) PPMC member

Hi everyone,

Apache Kvrocks(incubating) proposes to invite XXXXXX to join the PPMC.

The vote result is available here: https://lists.apache.org/...

Thanks!
```

## Initiate invitation email

After the result summary email is sent, the poll initiator must send an invitation email to the candidates.

The invitation email is sent to the invitee with a CC to `private@kvrocks.apache.org`; the invited candidate must reply to accept or decline the invitation through the specified email address.

The following is an example of an email inviting candidates:

```text
Subject: Invitation to become Kvrocks(incubating) committer: [invitee name]

Hi [invitee name],

The Kvrocks Project Management Committee (PMC)

hereby offers you committer privileges to the project.
These privileges are offered on the understanding that you'll use them
reasonably and with common sense. We like to work on trust
rather than unnecessary constraints.

Being a committer enables you to more easily make
changes without needing to go through the patch
submission process.

Being a committer does not require you to
participate any more than you already do. It does
tend to make one even more committed.  You will
probably find that you spend more time here.

Of course, you can decline and instead remain as a
contributor, participating as you do now.

Of course, you can decline and instead remain as a
contributor, participating as you do now.

This personal invitation is a chance for you to accept or decline in private.
Please let us know in reply to this message whether you accept or decline.

If you accept, you will need an Apache account (id) with privileges.
Please follow these instructions.

A. If you already have an ICLA on file:

    1. If you already have an Apache account, let us know your id and we
will grant you privileges on the project repositories.

    2. If you have previously sent an ICLA, let us know the email address
and public name used on the ICLA and your preferred Apache id, and
we will request your account.

    3. If the email address on the previously submitted ICLA is no longer
valid, let us know the email address and public name used on the new ICLA,
and your preferred Apache id. Continue to step B below and file your new ICLA.

Look to see if your preferred ID is already taken at
https://people.apache.org/committer-index.html

B. If there is not already an ICLA on file, you need to submit an ICLA:

    1. Details of the ICLA and the forms are found
    through this link: https://www.apache.org/licenses/#clas

    2. Instructions for its completion and return to
    the Secretary of the ASF are found at
    https://www.apache.org/licenses/contributor-agreements.html#submitting

    Do not copy the project or any other individual on your message
    to Secretary, as the form contains Personally Identifiable Information
    that should be kept private.

    3. When you complete the ICLA form, be sure to include in the form
    the Apache Kvrocks project and choose a
    unique Apache ID. Look to see if your preferred
    ID is already taken at
    https://people.apache.org/committer-index.html
    This will allow the Secretary to notify the PMC
    when your ICLA has been recorded.

When recording of your ICLA is noted, you will
receive a follow-up message with the next steps for
establishing you as a committer.
```

For inviting the PPMC member, the mail template can refer [this](https://incubator.apache.org/guides/ppmc-offer.txt).

## Processing after accepting the invitation

Create an Apache account and add the candidate account to the project. After the candidate accepts the invitation, if the candidate does not have an apache email account, the voting initiator needs to assist the candidate to create an Apache account according to the guidelines.

When signing the ICLA, the candidate needs to write the project name of "Apache Kvrocks" in the "notify project:" column, so that the candidate account will be added to the list of corresponding project personnel by Apache.

The voting initiator needs to add project team members, open a permission account for the Apache project, and confirm that the candidate's Apache account has been added to the project address: http://people.apache.org/phonebook.html?podling=kvrocks.

## ANNOUNCE to the community

After the above steps are completed, the vote initiator must send a notification email to the `dev@kvrocks.apache.org` mail group. The following is a sample notification email:

```text
[ANNOUNCE] New [committer|PPMC member]: XXXXXX

Hi everyone,

The Project Management Committee(PPMC) for Apache Kvrocks has invited XXXXXX to become a [committer|PPMC member] and we are pleased to announce that he/she has accepted.

XXXXXX is being active in the Kvrocks community, and we are glad to see his/her more interactions with the community in the future.

Welcome XXXXXX, and please enjoy your journey.:)

Thanks!
```

At this point, the entire process is completed, and the candidate officially becomes a Committer or PPMC member of the project.
