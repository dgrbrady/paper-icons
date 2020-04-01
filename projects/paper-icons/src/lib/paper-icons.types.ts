export type paperIcon =
  | "allor_nothing_p_1"
  | "attack_fxbttyd_1"
  | "attack_fxg_1"
  | "attack_fxp_1"
  | "attack_fxr_1"
  | "attack_fxy_1"
  | "bump_attack_1"
  | "charge_p_1"
  | "charge_ttyd_1"
  | "chill_out_ttyd_1"
  | "close_call_p_1"
  | "close_call_ttyd_1"
  | "damage_dodge_1"
  | "damage_dodge_p_1"
  | "defend_plus_1"
  | "defend_plus_p_1"
  | "double_dip_1"
  | "double_dip_p_1"
  | "double_pain_1"
  | "feeling_fine_1"
  | "feeling_fine_p_1"
  | "fire_drive_1"
  | "first_attack_1"
  | "flower_finder_1"
  | "flower_saver_1"
  | "flower_saver_p_1"
  | "fp_drain_1"
  | "fp_drain_p_1"
  | "fp_plus_1"
  | "hammerman_1"
  | "hammer_throw_ttyd_1"
  | "happy_flower_p_1"
  | "happy_flower_ttyd_1"
  | "happy_heart_1"
  | "happy_heart_p_1"
  | "head_rattle_1"
  | "heart_finder_1"
  | "hp_drain_p_1"
  | "hp_drain_ttyd_1"
  | "hp_plus_p_1"
  | "hp_plus_ttyd_1"
  | "ice_power_1"
  | "ice_smash_1"
  | "invalid_item_1"
  | "invalid_item_p_1"
  | "item_hog_1"
  | "jumpman_ttyd_1"
  | "last_stand_1"
  | "last_stand_p_1"
  | "l_emblem_1"
  | "lucky_day_1"
  | "lucky_day_p_1"
  | "lucky_start_1"
  | "mega_jump_1"
  | "mega_quake_1"
  | "mega_rush_1"
  | "mega_rush_p_1"
  | "mega_smash_1"
  | "money_money_1"
  | "multibounce_1"
  | "p_down_d_up_1"
  | "p_down_d_up_p_1"
  | "peekaboo_ttyd_1"
  | "piercing_blow_1"
  | "pity_flower_1"
  | "pity_flower_p_1"
  | "pmttyd_all_or_nothing_badge_1"
  | "power_bounce_1"
  | "power_jump_1"
  | "power_plus_p_1"
  | "power_plus_ttyd_1"
  | "power_rush_1"
  | "power_rush_p_1"
  | "power_smash_1"
  | "pretty_lucky_1"
  | "pretty_lucky_p_1"
  | "p_up_d_down_1"
  | "p_up_d_down_p_1"
  | "quake_hammer_1"
  | "quick_change_1"
  | "refund_1"
  | "return_postage_1"
  | "shrink_stomp_1"
  | "simplifier_1"
  | "sleepy_stomp_1"
  | "slow_go_1"
  | "soft_stomp_1"
  | "spike_shield_1"
  | "super_appeal_1"
  | "super_appeal_p_1"
  | "super_charge_1"
  | "super_charge_p_1"
  | "timing_tutor_1"
  | "tornado_jump_ttyd_1"
  | "triple_dip_1"
  | "triple_dip_p_1"
  | "unknown_badge_ttyd_1"
  | "unsimplifier_1"
  | "w_emblem_ttyd_early_1"
  | "w_emblem_1"
  | "zap_tap_1";

export interface PaperIcon {
  name: paperIcon;
  data: string;
}

export enum PaperIconNames {
  ALL_OR_NOTHING = "allor_nothing_p_1",
  ATTACK_FX_B = "attack_fxbttyd_1",
  ATTACK_FX_G = "attack_fxg_1",
  ATTACK_FX_P = "attack_fxp_1",
  ATTACK_FX_R = "attack_fxr_1",
  ATTACK_FX_Y = "attack_fxy_1",
  BUMP_ATTACK = "bump_attack_1",
  CHARGE_P = "charge_p_1",
  CHARGE = "charge_ttyd_1",
  CHILL_OUT = "chill_out_ttyd_1",
  CHILL_OUT_P = "close_call_p_1",
  CLOSE_CALL = "close_call_ttyd_1",
  DAMAGE_DODGE = "damage_dodge_1",
  DAMAGE_DODGE_P = "damage_dodge_p_1",
  DEFEND_PLUS = "defend_plus_1",
  DEFEND_PLUS_P = "defend_plus_p_1",
  DOUBLE_DIP = "double_dip_1",
  DOUBLE_DIP_P = "double_dip_p_1",
  DOUBLE_PAIN = "double_pain_1",
  FEELING_FINE = "feeling_fine_1",
  FEELING_FINE_P = "feeling_fine_p_1",
  FIRE_DRIVE = "fire_drive_1",
  FIRST_ATTACK = "first_attack_1",
  FLOWER_FINDER = "flower_finder_1",
  FLOWER_SAVER = "flower_saver_1",
  FLOWER_SAVER_P = "flower_saver_p_1",
  FP_DRAIN = "fp_drain_1",
  FP_DRAIN_P = "fp_drain_p_1",
  FP_PLUS = "fp_plus_1",
  HAMMERMAN = "hammerman_1",
  HAMMER_THROW = "hammer_throw_ttyd_1",
  HAPPY_FLOWER_P = "happy_flower_p_1",
  HAPPY_FLOWER = "happy_flower_ttyd_1",
  HAPPY_HEART = "happy_heart_1",
  HAPPY_HEART_P = "happy_heart_p_1",
  HEAD_RATTLE = "head_rattle_1",
  HEART_FINDER = "heart_finder_1",
  HP_DRAIN_P = "hp_drain_p_1",
  HP_DRAIN = "hp_drain_ttyd_1",
  HP_PLUS_P = "hp_plus_p_1",
  HP_PLUS = "hp_plus_ttyd_1",
  ICE_POWER = "ice_power_1",
  ICE_SMASH = "ice_smash_1",
  INVALID_ITEM = "invalid_item_1",
  INVALID_ITEM_P = "invalid_item_p_1",
  ITEM_HOG = "item_hog_1",
  JUMPMAN = "jumpman_ttyd_1",
  LAST_STAND = "last_stand_1",
  LAST_STAND_P = "last_stand_p_1",
  L_EMBLEM = "l_emblem_1",
  LUCKY_DAY = "lucky_day_1",
  LUCKY_DAY_P = "lucky_day_p_1",
  LUCKY_START = "lucky_start_1",
  MEGA_JUMP = "mega_jump_1",
  MEGA_QUAKE = "mega_quake_1",
  MEGA_RUSH = "mega_rush_1",
  MEGA_RUSH_P = "mega_rush_p_1",
  MEGA_SMASH = "mega_smash_1",
  MONEY_MONEY = "money_money_1",
  MULTIBOUNCE = "multibounce_1",
  P_DOWN_D_UP = "p_down_d_up_1",
  P_DOWN_D_UP_P = "p_down_d_up_p_1",
  PEEKABOO = "peekaboo_ttyd_1",
  PIERCING_BLOW = "piercing_blow_1",
  PITY_FLOWER = "pity_flower_1",
  PITY_FLOWER_P = "pity_flower_p_1",
  POWER_BOUNCE = "power_bounce_1",
  POWER_JUMP = "power_jump_1",
  POWER_PLUS_P = "power_plus_p_1",
  POWER_PLUS = "power_plus_ttyd_1",
  POWER_RUSH = "power_rush_1",
  POWER_RUSH_P = "power_rush_p_1",
  POWER_SMASH = "power_smash_1",
  PRETTY_LUCKY = "pretty_lucky_1",
  PRETTY_LUCKY_P = "pretty_lucky_p_1",
  P_UP_D_DOWN = "p_up_d_down_1",
  P_UP_D_DOWN_P = "p_up_d_down_p_1",
  QUAKE_HAMMER = "quake_hammer_1",
  QUICK_CHANGE = "quick_change_1",
  REFUND = "refund_1",
  RETURN_POSTAGE = "return_postage_1",
  SHRINK_STOMP = "shrink_stomp_1",
  SIMPLIFIER = "simplifier_1",
  SLEEPY_STOMP = "sleepy_stomp_1",
  SLOW_GO = "slow_go_1",
  SOFT_STOMP = "soft_stomp_1",
  SPIKE_SHIELD = "spike_shield_1",
  SUPER_APPEAL = "super_appeal_1",
  SUPER_APPEAL_P = "super_appeal_p_1",
  SUPER_CHARGE = "super_charge_1",
  SUPER_CHARGE_P = "super_charge_p_1",
  TIMING_TUTOR = "timing_tutor_1",
  TORNADO_JUMP = "tornado_jump_ttyd_1",
  TRIPLE_DIP = "triple_dip_1",
  TRIPLE_DIP_P = "triple_dip_p_1",
  UNKNOWN_BADGE = "unknown_badge_ttyd_1",
  UNSIMPLIFIER = "unsimplifier_1",
  W_EMBLEM_EARLY = "w_emblem_ttyd_early_1",
  W_EMBLEM = "w_emblem_1",
  ZAP_TAP = "zap_tap_1"
}
