---
id: vote-a-core-developer
title: Vote a new committer or PMC member
---

## Initiate discussion in the community private mailing group

Any Kvrocks PMC member can initiate a voting discussion.

After PMC finds any valuable contributions from community contributors and obtains the consent of the candidate, they can initiate a discussion on Kvrocks' private mailing list.

In the discussion email, the proposer should clearly state the candidate's contributions and give the address for reviewing the corresponding contributions, so that everyone can discuss and analyze it. The discussion email is sent to `private@kvrocks.apache.org`. The discussion will last at least 72 hours. PMC members will fully express their views on the proposed email.

The following is a sample discussion email:

```text
[DISCUSS] XXXXXX for Kvrocks [committer|PMC member]

I nominate XXXXXX as an Kvrocks [committer|PMC member]

Judging from the contributions in recent months, XXXXXX has submitted many
implementations[1][2] to the project and improved the management module for
the project.

During the optimization and improvement period of the project, it is hoped that
more people will participate in the actual project optimization and improvement,
to let the project more perfect and easier to use.

So I nominated XXXXXX as a [committer|PMC member] of the Kvrocks project.

[1] https://github.com/apache/incubator-kvrocks/issues/created_by/XXXXXX
[2] https://github.com/apache/incubator-kvrocks/commits?author=XXXXXX
```

## Initiate vote in the community private mailing group

If the discussion email does not receive the disagreement information within the specified time, the poll initiator needs to initiate a Committer or PMC election vote on Kvrocks' private mailing list.

The voting email is sent to `private@kvrocks.apache.org` for at least 72 hours, and at least 3 votes +1 passed; if less than 3 votes or 1 veto (-1 vote), the vote will fail; if a veto is initiated, the voter needs to EXPLAIN the reason for the veto clearly so that everyone can understand and know. A veto without explanation does not count.

The following is a sample poll email:

```text
[VOTE] XXXXXX as a Kvrocks [Committer|PMC member]

Judging from contributions in recent months, XXXXXX has submitted many
implementations[1][2] to the project and improved the management module for
the project.

During the optimization and improvement period of the project, it is hoped that
more people will participate in the actual project optimization and improvement,
to let the project more perfect and easier to use.

I think making him/her a [committer|PMC member] will be a recognition of his/her
outstanding work for Kvrocks. So, I am happy to call VOTE to accept XXXXXX as a
Kvrocks [committer|PMC member]

 Voting will continue for at least 72 hours or until the required number of votes is reached.

 Please vote accordingly:

 [ ] +1 approve
 [ ] +0 no opinion
 [ ] -1 disapprove with the reason

Here are three links to his contributions to Kvrocks:

[1] Issues: https://github.com/apache/incubator-kvrocks/issues/created_by/XXXXXX
[2] PRs   : https://github.com/apache/incubator-kvrocks/pulls/created_by/XXXXXX
```

## Feedback on voting results

After the voting email is over, the initiator of the vote needs to remind the voting end in the second [VOTE] email; at the same time, the initiator of the vote needs to initiate a vote summary email, and the summary email is sent to `private@kvrocks.apache.org`.

The following is a sample vote summary email:

```text
[RESULTS][VOTE] XXXXXX as a Kvrocks[committer|PMC member]

Hi everyone,

The vote for "XXXXXX as a Kvrocks [committer/PMC member]" has PASSED and closed now.

The result is as follows:

3 PMC members +1 Votes
- aaa
- bbb
- ccc

Vote thread: https://lists.apache.org/thread/aaaaaxxxx

Then I'm going to invite XXXXXX to join us.

Thanks for everyone's support!
```

Note: If it is not passed, the result is "The vote for "XXXXXX as a Kvrocks [committer|PMC member]" has FAILED and closed now."

## Newly added PMC member notification email

This step is only processed for the PMC member that passed the vote. If the election is Committer, this step is skipped and not executed.

Voting initiators need to send notification emails to Board's mailing group and wait at least 72 hours; email owners send `board@apache.org` and CC `private@kvrocks.apache.org`; Board will analyze compliance Until there is no doubt.

The following is an example of a new PMC notification email:

```text
[NOTICE] XXXXXX for Apache Kvrocks(incubating) PMC member

Hi everyone,

Apache Kvrocks(incubating) proposes to invite XXXXXX to join the PMC.

The vote result is available here: https://lists.apache.org/...

Thanks!
```

## Initiate invitation email

After the result summary email is sent, the poll initiator must send an invitation email to the candidates.

The invitation email is sent to the invitee with a CC to `private@kvrocks.apache.org`; the invited candidate must reply to accept or decline the invitation through the specified email address.

The following is an example of an email inviting candidates:

```text
[Invitation] Invitation to join Apache Kvrocks as a [committer|PMC member]

Hi XXXXXX,

In recognition of your contributions to Apache Kvrocks(incubating), the Kvrocks PMC
has recently voted to add you as a [committer|PMC member]. The [committer|PMC member]
role gives you access to merge patches into Apache Kvrocks(incubating) and is also
a stepping-stone towards membership in the Project Management Committee (PMC). We hope
that you accept this invitation and continue to help us make Apache Kvrocks(incubating)
better.

If you'd like to accept, you will need to send an Individual Contributor License Agreement
(ICLA) to secretary@apache.org, CCing private@kvrocks.apache.org, and request an
Apache account name as described at https://www.apache.org/dev/new-committers-guide.html
if you don't already have one, once you get an account name, or if you have one already,
please email it to me.

NOTICE: when you fill out ICLA file, the value of preferred Apache id(s) needs to be a valid ID,
including:

    1. The ID must not already be in use in https://people.apache.org/committer-index.html;
    2. The characters "-" and "_" are not allowed in id;
    3. The id must consist of lowercase alphanumeric characters only,
       start with an alphabetic character, have a minimum length of 3 characters,
       and have no special characters.

With the expectation of your acceptance, welcome!

The Apache Kvrocks(incubating) PMC
```

## Processing after accepting the invitation

Create an Apache account and add the candidate account to the project. After the candidate accepts the invitation, if the candidate does not have an apache email account, the voting initiator needs to assist the candidate to create an Apache account according to the guidelines.

When signing the ICLA, the candidate needs to write the project name of "Apache Kvrocks" in the "notify project:" column, so that the candidate account will be added to the list of corresponding project personnel by Apache.

The voting initiator needs to add project team members, open a permission account for the Apache project, and confirm that the candidate's Apache account has been added to the project address: http://people.apache.org/phonebook.html?podling=kvrocks.

## ANNOUNCE to the community

After the above steps are completed, the vote initiator must send a notification email to the `dev@kvrocks.apache.org` mail group. The following is a sample notification email:

```text
[ANNOUNCE] New [committer|PMC member]: XXXXXX

Hi everyone,

The Project Management Committee(PMC) for Apache Kvrocks has invited XXXXXX to become a [committer|PMC member] and we are pleased to announce that he has accepted.

XXXXXX is being active in the Kvrocks community, and we are glad to see his more interactions with the community in the future.

Welcome XXXXXX, and please enjoy your journey.:)

Thanks!
```

At this point, the entire process is completed, and the candidate officially becomes a Committer or PMC member of the project.
