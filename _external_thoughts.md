Paweł:

Not strictly web, but related - I'm a bit excited about hardware projects and I don't think I'm the only one ;) Because of hardware and network constraints, they require different transports, protocols and authorization mechanisms. Current solutions are far from ideal (if not awkward) for small, independent devices.

Data sync is interesting too. I'm not sure about Meteor and Firebase, they both seem hacky in some places and there's plenty of room for improvement in the near future.

BTW. MQTT is not M2M, it's a client-server protocol, but optimized for IoT stuff :)

---

Max:

This is a pretty fascinating discussion topic, and runs to the heart of what we do. I'm not sure I'm going to be able to do it justice today, and may need to revisit.

Firstly, (and controversially), I'm not sure I believe that there is such a thing as "realtime apps" any more. Apps either update instantly and smoothly, or they appear broken. I feel that "realtime" as a feature has moved down the Kano graph. It is much more of an expectation, than an "exciter".

This presents opportunities as well as challenges, and requires looking at who our customers are and what they want. One way of looking at it is that realtime is no longer a nice-to-have for our customers. There is potential to be more of a pain-killer than a vitamin.

On the subject of wider trends, connected devices are very interesting, as is mobile. However, on mobile especially, there is a lot of talk about the death of the app, and future experiences existing purely at the notification level. All of which is very realtime, but not constrained in the way it is now.

Mary Meeker's internet trend report certainly indicates that messaging will be a core part of this new paradigm.

Interestingly, "realtime" is not part of the "primary" marketing of either Meteor or Firebase...

---

Sylvain:

I think that most of the common realtime use cases ( notifications, chats, activity streams, realtime map, data visualisation, data sync, etc )  have already been discovered and are just must have and not exciters.  However each one of them get more and more "augmented". For example you now have the concept of interacting with notifications (reply in the notifications, install something, etc ). Even things like Slack new emoji respond features is moving in that direction.

Finally, I feel that the future of realtime is all about "Streams" of personalised events/info where the users will interact with it via short actions and essentially pushing other events/data back into other streams. The idea is that we will stop consuming information inside silos (or apps) but instead we will have a more uniformed UI and UX where everything get push onto and we can just "act" or consume it. Google now and Siri are certainly going into that direction. Another example is Pepple's new Time UI. Finally, Apple WatchOS 2 with the "time travel" is I believe slowing moving toward that "stream" ux. Location awareness and "realtimeness" plays a big part in this.

Hope that helps and makes a bit of sense. It is essentially just a brain dump.

GL & HF :)
