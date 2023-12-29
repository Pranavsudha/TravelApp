import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../../../../constants/theme";
import { reusable } from "../../Reusable/resusable.style";
import NetworkImage from "../../Reusable/NetworkImage";
import WidthSpacer from "../../Reusable/WidthSpacer";
import ReusableText from "../../Reusable/ReusableText";
import Rating from "../../Reusable/Rating";
import moment from "moment";
import DescriptionText from "../../Reusable/DescriptionText";

const ReviewsTile = ({ review }) => {
  const moment = require("moment");
  return (
    <View style={styles.reviewBorder}>
      <View style={reusable.rowWithSpace("space-between")}>
        <View style={reusable.rowWithSpace("flex-start")}>
          <NetworkImage
            source={review.user.profile}
            width={54}
            height={54}
            radius={10}
          />
          <WidthSpacer width={10} />
          <View style={{width:"80%"}}>
            <View style={reusable.rowWithSpace("space-between")}>
              <ReusableText
                text={review.user.username}
                family={"medium"}
                size={SIZES.small + 2}
                color={COLORS.gray}
              />
              <WidthSpacer width={"25%"} />
              <View style={reusable.rowWithSpace("space-between")}>
                <Rating Rating={review.rating} />
                <WidthSpacer width={10} />
                <ReusableText
                  text={moment(
                    review.updatedAt,
                    "YYYY-MM-DDTHH:mm:ss:SSSZ"
                  ).format("YYYY-MM-DD")}
                  family={"medium"}
                  size={SIZES.small + 2}
                  color={COLORS.gray}
                />
              </View>
            </View>
           <DescriptionText lines={3} description={review.review} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ReviewsTile;

const styles = StyleSheet.create({
  reviewBorder: {
    paddingBottom: 10,
    borderBottomWidth: 0.5,
    borderColor: COLORS.gray,
  },
});
