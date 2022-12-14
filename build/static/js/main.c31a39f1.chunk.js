(this.webpackJsonpfrontend = this.webpackJsonpfrontend || []).push([
  [0],
  {
    100: function (e, t, n) {},
    101: function (e, t, n) {},
    102: function (e, t, n) {},
    103: function (e, t, n) {},
    104: function (e, t, n) {},
    105: function (e, t, n) {},
    106: function (e, t, n) {
      "use strict";
      n.r(t);
      var c = n(1),
        a = n(39),
        s = n.n(a),
        r = (n(62), n(13)),
        i = n(8),
        o = n(6),
        l = n(2),
        j = n(5),
        d = (n(63), n(118)),
        u = n(7),
        p = n(4),
        b = n.n(p),
        O = n(9),
        m = n(40),
        f = n.n(m).a.create({
          baseURL: "https://instagram-backend-nine.vercel.app/api",
          timeout: 3e5,
          withCredentials: !0,
        }),
        h = "LOGIN_FAIL",
        g = "LOGIN_SUCCESS",
        x = "LOGIN_REQUEST",
        v = "REGISTER_USER_FAIL",
        _ = "REGISTER_USER_SUCCESS",
        y = "REGISTER_USER_REQUEST",
        N = "LOAD_USER_FAIL",
        w = "LOAD_USER_SUCCESS",
        S = "LOAD_USER_REQUEST",
        E = "LOGOUT_FAIL",
        C = "LOGOUT_SUCCESS",
        k = "UPDATE_USER_REQUEST",
        U = "UPDATE_USER_SUCCESS",
        P = "UPDATE_USER_FAIL",
        L = "SUGGESTION_USER_REQUEST",
        F = "SUGGESTION_USER_SUCCESS",
        T = "SUGGESTION_USER_FAIL",
        R = "FOLLOWING_USER_REQUEST",
        I = "FOLLOWING_USER_SUCCESS",
        M = "FOLLOWING_USER_FAIL",
        A = "UNFOLLOW_USER_REQUEST",
        D = "UNFOLLOW_USER_SUCCESS",
        G = "UNFOLLOW_USER_FAIL",
        Q = "GET_USER_PROFILE_REQUEST",
        B = "GET_USER_PROFILE_SUCCESS",
        W = "GET_USER_PROFILE_FAIL",
        q = "CREATE_POST_REQUEST",
        V = "CREATE_POST_SUCCESS",
        z = "CREATE_POST_FAIL",
        H = "GET_POSTS_REQUEST",
        Y = "GET_POSTS_SUCCESS",
        J = "GET_POSTS_FAIL",
        K = "CLEAR_POST_SUCCESS_AND_ERROR",
        X = "GET_FEED_POSTS_REQUEST",
        Z = "GET_FEED_POSTS_SUCCESS",
        $ = "ADD_COMMENT_REQUEST",
        ee = "ADD_COMMENT_SUCCESS",
        te = "ADD_COMMENT_FAIL",
        ne = "SINGLE_POST_REQUEST",
        ce = "SINGLE_POST_SUCCESS",
        ae = "SINGLE_POST_FAIL",
        se = "SP_COMMENT_ADD_REQUEST",
        re = "SP_COMMENT_ADD_SUCCESS",
        ie = "SP_COMMENT_ADD_FAIL",
        oe = "SINGLE_FEED_COMMENT_GET_REQUEST",
        le = "SINGLE_FEED_COMMENT_GET_SUCCESS",
        je = "SINGLE_FEED_COMMENT_GET_FAIL",
        de = function (e) {
          return (function () {
            var t = Object(O.a)(
              b.a.mark(function t(n) {
                var c;
                return b.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            n({ type: H }),
                            (t.prev = 1),
                            (t.next = 4),
                            f.get("/post/others/".concat(e))
                          );
                        case 4:
                          (c = t.sent),
                            n({ type: Y, payload: c.data.posts }),
                            (t.next = 11);
                          break;
                        case 8:
                          (t.prev = 8),
                            (t.t0 = t.catch(1)),
                            n({ type: J, payload: t.t0.response.data.error });
                        case 11:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[1, 8]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        },
        ue = function (e) {
          return (function () {
            var t = Object(O.a)(
              b.a.mark(function t(n) {
                var c;
                return b.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            n({ type: ne }),
                            (t.prev = 1),
                            (t.next = 4),
                            f.get("/post/".concat(e))
                          );
                        case 4:
                          (c = t.sent),
                            n({ type: ce, payload: c.data.post }),
                            (t.next = 11);
                          break;
                        case 8:
                          (t.prev = 8),
                            (t.t0 = t.catch(1)),
                            n({ type: ae, payload: t.t0.response.data.error });
                        case 11:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[1, 8]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        },
        pe = function (e, t) {
          return (function () {
            var n = Object(O.a)(
              b.a.mark(function n(c) {
                var a, s, r, i, o;
                return b.a.wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (n.prev = 0),
                            c({ type: x }),
                            (a = {
                              Headers: { "Content-Type": "application/json" },
                            }),
                            (n.next = 5),
                            f.post("/login", { email: e, password: t }, a)
                          );
                        case 5:
                          (s = n.sent),
                            (r = s.data),
                            c({
                              type: g,
                              payload:
                                null === r || void 0 === r ? void 0 : r.user,
                            }),
                            (n.next = 13);
                          break;
                        case 10:
                          (n.prev = 10),
                            (n.t0 = n.catch(0)),
                            c({
                              type: h,
                              payload:
                                null === (i = n.t0.response) ||
                                void 0 === i ||
                                null === (o = i.data) ||
                                void 0 === o
                                  ? void 0
                                  : o.error,
                            });
                        case 13:
                        case "end":
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[0, 10]]
                );
              })
            );
            return function (e) {
              return n.apply(this, arguments);
            };
          })();
        },
        be = function (e) {
          return (function () {
            var t = Object(O.a)(
              b.a.mark(function t(n) {
                var c;
                return b.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            n({ type: R }),
                            (t.prev = 1),
                            (t.next = 4),
                            f.put("/user/following", { following: e })
                          );
                        case 4:
                          (c = t.sent),
                            n({ type: I, payload: c.data.followingId }),
                            (t.next = 11);
                          break;
                        case 8:
                          (t.prev = 8),
                            (t.t0 = t.catch(1)),
                            n({ type: M, payload: t.t0.response.data.error });
                        case 11:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[1, 8]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        },
        Oe = function (e) {
          return (function () {
            var t = Object(O.a)(
              b.a.mark(function t(n) {
                var c;
                return b.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            n({ type: A }),
                            (t.prev = 1),
                            (t.next = 4),
                            f.put("/user/unfollowing", { unfollowing: e })
                          );
                        case 4:
                          (c = t.sent),
                            n({ type: D, payload: c.data.unfollowingId }),
                            (t.next = 11);
                          break;
                        case 8:
                          (t.prev = 8),
                            (t.t0 = t.catch(1)),
                            n({ type: G, payload: t.t0.response.data.error });
                        case 11:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[1, 8]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        },
        me = n(0),
        fe = function (e) {
          var t = e.isSignPage,
            n = (e.onNext, Object(u.b)()),
            a = Object(c.useState)({
              email: "",
              fullname: "",
              username: "",
              password: "",
            }),
            s = Object(j.a)(a, 2),
            i = s[0],
            p = s[1],
            m = function (e) {
              p(
                Object(l.a)(
                  Object(l.a)({}, i),
                  {},
                  Object(o.a)({}, e.target.name, e.target.value)
                )
              );
            };
          return Object(me.jsxs)("div", {
            className: "auth",
            children: [
              Object(me.jsxs)("div", {
                className: "container",
                children: [
                  Object(me.jsx)("div", {
                    className: "auth-logo-image",
                    children: Object(me.jsx)("img", {
                      src: "https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png",
                      alt: "",
                    }),
                  }),
                  Object(me.jsx)("span", {
                    className: t ? "auth-notice-heading" : "not-signup-page",
                    children:
                      "Sign up to see photos and videos from your friends.",
                  }),
                  Object(me.jsxs)("button", {
                    className: t ? "" : "not-signup-page",
                    children: [
                      Object(me.jsx)(d.a, { className: "icon" }),
                      " Log in with Facebook",
                    ],
                  }),
                  Object(me.jsxs)("div", {
                    className: t ? "or-separation" : "not-signup-page",
                    children: [
                      Object(me.jsx)("span", { className: "line" }),
                      Object(me.jsx)("span", {
                        className: "or",
                        children: "OR",
                      }),
                      Object(me.jsx)("span", { className: "line" }),
                    ],
                  }),
                  Object(me.jsxs)("form", {
                    children: [
                      Object(me.jsx)("input", {
                        type: "email",
                        name: "email",
                        required: !0,
                        onChange: m,
                        placeholder: "Email",
                        defaultValue: "",
                      }),
                      Object(me.jsx)("input", {
                        type: "text",
                        name: "fullname",
                        required: !0,
                        placeholder: "Full Name",
                        className: t ? "" : "not-signup-page",
                        onChange: m,
                      }),
                      Object(me.jsx)("input", {
                        type: "text",
                        name: "username",
                        required: !0,
                        placeholder: "Username",
                        className: t ? "" : "not-signup-page",
                        onChange: m,
                      }),
                      Object(me.jsx)("input", {
                        type: "password",
                        name: "password",
                        required: !0,
                        placeholder: "Password",
                        onChange: m,
                        defaultValue: "",
                      }),
                      Object(me.jsx)("button", {
                        type: "submit",
                        onClick: function (e) {
                          var t;
                          e.preventDefault(),
                            n(
                              ((t = i),
                              (function () {
                                var e = Object(O.a)(
                                  b.a.mark(function e(n) {
                                    var c, a, s;
                                    return b.a.wrap(
                                      function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              return (
                                                (e.prev = 0),
                                                n({ type: y }),
                                                (c = {
                                                  Headers: {
                                                    "Content-Type":
                                                      "multipart/form-data",
                                                  },
                                                }),
                                                (e.next = 5),
                                                f.post("/signup", t, c)
                                              );
                                            case 5:
                                              (a = e.sent),
                                                (s = a.data),
                                                n({ type: _, payload: s.user }),
                                                (e.next = 13);
                                              break;
                                            case 10:
                                              (e.prev = 10),
                                                (e.t0 = e.catch(0)),
                                                n({
                                                  type: v,
                                                  payload:
                                                    e.t0.response.data.error,
                                                });
                                            case 13:
                                            case "end":
                                              return e.stop();
                                          }
                                      },
                                      e,
                                      null,
                                      [[0, 10]]
                                    );
                                  })
                                );
                                return function (t) {
                                  return e.apply(this, arguments);
                                };
                              })())
                            );
                        },
                        className: t ? "" : "not-signup-page",
                        children: "Sign up",
                      }),
                      Object(me.jsx)("button", {
                        type: "submit",
                        onClick: function (e) {
                          e.preventDefault(), n(pe(i.email, i.password));
                        },
                        className: t ? "not-signup-page" : "login-page",
                        children: "Log In",
                      }),
                    ],
                  }),
                  Object(me.jsx)("span", {
                    className: t ? "" : "not-signup-page",
                    children:
                      "By signing up, you agree to our Terms , Data Policy and Cookies Policy .",
                  }),
                  Object(me.jsx)("span", {
                    className: t ? "not-signup-page" : "login-page",
                    children: "Forgot Password?",
                  }),
                ],
              }),
              Object(me.jsx)("div", {
                className: t ? "signup-notshow" : "signup-show",
                children: Object(me.jsxs)("p", {
                  children: [
                    "Have an account?",
                    " ",
                    Object(me.jsx)(r.b, {
                      to: "/login",
                      children: Object(me.jsx)("span", { children: "Log in" }),
                    }),
                  ],
                }),
              }),
              Object(me.jsx)("div", {
                className: t ? "signup-show" : "signup-notshow",
                children: Object(me.jsxs)("p", {
                  children: [
                    "Don't have an account?",
                    Object(me.jsx)(r.b, {
                      to: "/signup",
                      children: Object(me.jsx)("span", { children: "Sign up" }),
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        he = function () {
          return Object(me.jsx)("div", {
            className: "login",
            children: Object(me.jsx)(fe, { isSignPage: !1 }),
          });
        },
        ge =
          (n(89),
          function (e) {
            var t = e.follow,
              n = e.users,
              c = e.followingUser,
              a = Object(u.b)();
            return Object(me.jsx)(me.Fragment, {
              children:
                n &&
                Object(me.jsxs)("div", {
                  className: "profileComp",
                  children: [
                    Object(me.jsx)("img", { src: n.avatar, alt: "" }),
                    Object(me.jsx)("p", { children: n.username }),
                    t &&
                      !c.includes(n._id) &&
                      Object(me.jsx)("span", {
                        onClick: function () {
                          return (e = n._id), void a(be(e));
                          var e;
                        },
                        children: "Follow",
                      }),
                    c.includes(n._id) &&
                      Object(me.jsx)("div", {
                        onClick: function () {
                          return (e = n._id), void a(Oe(e));
                          var e;
                        },
                        children: "following",
                      }),
                  ],
                }),
            });
          }),
        xe = n(119),
        ve = n(120),
        _e = n(121),
        ye = n(122),
        Ne = n(123),
        we = (n(90), n(42)),
        Se = n(124),
        Ee =
          (n(91),
          function (e) {
            var t = e.data,
              n = Object(c.useState)(""),
              a = Object(j.a)(n, 2),
              s = a[0],
              r = a[1],
              i = Object(c.useRef)();
            return (
              Object(c.useEffect)(
                function () {
                  (function () {
                    var e = Object(O.a)(
                      b.a.mark(function e(t) {
                        var n, c;
                        return b.a.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.prev = 0),
                                    (e.next = 3),
                                    f.get("/user/profilePic/".concat(t))
                                  );
                                case 3:
                                  (n = e.sent),
                                    (c = n.data),
                                    r(c.profilePic),
                                    (e.next = 11);
                                  break;
                                case 8:
                                  (e.prev = 8),
                                    (e.t0 = e.catch(0)),
                                    console.log(e.t0.message);
                                case 11:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          null,
                          [[0, 8]]
                        );
                      })
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })()(t.user);
                },
                [t]
              ),
              Object(c.useEffect)(
                function () {
                  var e;
                  null === (e = i.current) ||
                    void 0 === e ||
                    e.scrollIntoView({ behavior: "smooth" });
                },
                [t]
              ),
              Object(me.jsx)("div", {
                className: "CommentUser",
                children: Object(me.jsxs)("div", {
                  className: "CU_contaienr",
                  children: [
                    Object(me.jsx)("img", { src: s, alt: "" }),
                    Object(me.jsx)("p", {
                      className: "commetterName",
                      children: t.userName,
                    }),
                    Object(me.jsx)("p", {
                      className: "comment_content",
                      ref: i,
                      children: t.comment,
                    }),
                  ],
                }),
              })
            );
          }),
        Ce =
          (n(92),
          function (e) {
            var t = e.setShowPOPUPP,
              n = Object(u.c)(function (e) {
                return e.singlePost;
              }).singlePost,
              a = Object(u.c)(function (e) {
                return e.user;
              }).user,
              s = Object(u.b)(),
              i = Object(c.useState)(""),
              o = Object(j.a)(i, 2),
              l = o[0],
              d = o[1],
              p = Object(c.useState)(null),
              m = Object(j.a)(p, 2),
              h = m[0],
              g = m[1];
            Object(c.useEffect)(
              function () {
                (function () {
                  var e = Object(O.a)(
                    b.a.mark(function e(t) {
                      var n, c;
                      return b.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  (e.next = 3),
                                  f.get("/user/".concat(t))
                                );
                              case 3:
                                (n = e.sent),
                                  (c = n.data),
                                  g(c.user),
                                  (e.next = 11);
                                break;
                              case 8:
                                (e.prev = 8),
                                  (e.t0 = e.catch(0)),
                                  console.log(e.t0.message);
                              case 11:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[0, 8]]
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })()(n.user);
              },
              [n]
            );
            var x = function (e) {
              var t;
              e.preventDefault(),
                s(
                  ((t = {
                    postId: n._id,
                    comment: l,
                    user: a._id,
                    userName: a.username,
                  }),
                  (function () {
                    var e = Object(O.a)(
                      b.a.mark(function e(n) {
                        var c;
                        return b.a.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    n({ type: se }),
                                    (e.prev = 1),
                                    (e.next = 4),
                                    f.put("/comment/create", t)
                                  );
                                case 4:
                                  (c = e.sent),
                                    n({ type: re, payload: c.data.comment }),
                                    (e.next = 11);
                                  break;
                                case 8:
                                  (e.prev = 8),
                                    (e.t0 = e.catch(1)),
                                    n({ type: ie });
                                case 11:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          null,
                          [[1, 8]]
                        );
                      })
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })())
                ),
                d("");
            };
            return Object(me.jsx)(me.Fragment, {
              children:
                n &&
                h &&
                Object(me.jsx)("div", {
                  className: "postsPopupDetail",
                  onClick: function (e) {
                    e.target.classList.contains("postsPopupDetail") && t(!1);
                  },
                  children: Object(me.jsxs)("div", {
                    className: "postsPopupDetail_container",
                    children: [
                      Object(me.jsx)("div", {
                        className: "PPD_left",
                        children: Object(me.jsx)("img", {
                          src: n.media,
                          alt: "",
                        }),
                      }),
                      Object(me.jsx)("div", {
                        className: "PPD_right",
                        children: Object(me.jsxs)("div", {
                          className: "PPD_right_container",
                          children: [
                            Object(me.jsxs)("div", {
                              className: "singleMainComp_top",
                              children: [
                                Object(me.jsx)(r.b, {
                                  to: "/".concat(h.username),
                                  className: "link",
                                  children: Object(me.jsxs)("div", {
                                    className: "singleMainComp_profile_n_logo",
                                    children: [
                                      Object(me.jsx)("img", {
                                        src: h.avatar,
                                        alt: "",
                                      }),
                                      Object(me.jsx)("p", {
                                        children: h.username,
                                      }),
                                    ],
                                  }),
                                }),
                                Object(me.jsx)("div", {
                                  className: "singleMainComp_t_dot",
                                  children: Object(me.jsx)(xe.a, {}),
                                }),
                              ],
                            }),
                            Object(me.jsxs)("div", {
                              className: "singleMainComp_description",
                              children: [
                                Object(me.jsx)("span", {
                                  className: "user_namesmc",
                                  children: "englishpeaks ",
                                }),
                                Object(me.jsx)("span", { children: n.caption }),
                              ],
                            }),
                            Object(me.jsx)("div", {
                              className: "commentLists",
                              children:
                                n.comments &&
                                n.comments.map(function (e) {
                                  return Object(me.jsx)(Ee, { data: e });
                                }),
                            }),
                            Object(me.jsxs)("div", {
                              className: "singleMainComp_activity_icons",
                              children: [
                                Object(me.jsxs)("div", {
                                  className: "singleMainComp_activity_icon",
                                  children: [
                                    Object(me.jsx)(ve.a, {
                                      className:
                                        "singleMainComp_activity_iconr sss",
                                    }),
                                    Object(me.jsx)(_e.a, {
                                      className:
                                        "singleMainComp_activity_iconr",
                                    }),
                                    Object(me.jsx)(ye.a, {
                                      className:
                                        "singleMainComp_activity_iconr",
                                    }),
                                  ],
                                }),
                                Object(me.jsx)("div", {
                                  className:
                                    "singleMainComp_activity_save_icon",
                                  children: Object(me.jsx)(Ne.a, {
                                    className: "singleMainComp_activity_iconr",
                                  }),
                                }),
                              ],
                            }),
                            Object(me.jsx)("div", {
                              className: "likeCount",
                              children: Object(me.jsxs)("p", {
                                children: [n.likes && n.likes.length, " Likes"],
                              }),
                            }),
                            Object(me.jsx)("p", {
                              className: "timeAgo",
                              children: Object(we.a)(n.createdAt),
                            }),
                            Object(me.jsxs)("div", {
                              className: "add_comment",
                              children: [
                                Object(me.jsx)("div", {
                                  className: "add_icon",
                                  children: Object(me.jsx)(Se.a, {}),
                                }),
                                Object(me.jsxs)("form", {
                                  onSubmit: x,
                                  children: [
                                    Object(me.jsx)("input", {
                                      type: "text",
                                      placeholder: "Add a comment...",
                                      value: l,
                                      onChange: function (e) {
                                        return d(e.target.value);
                                      },
                                    }),
                                    Object(me.jsx)("button", {
                                      type: "submit",
                                      onClick: x,
                                      children: "Post",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
            });
          }),
        ke = function (e) {
          var t = e.feedPost,
            n =
              (Object(u.c)(function (e) {
                return e.user;
              }).user,
              Object(c.useState)("")),
            a = Object(j.a)(n, 2),
            s = (a[0], a[1], Object(c.useState)(!1)),
            i = Object(j.a)(s, 2),
            o = i[0],
            l = i[1],
            d = Object(u.b)(),
            p = function (e) {
              l(!0), d(ue(e));
            };
          return Object(me.jsxs)(me.Fragment, {
            children: [
              Object(me.jsxs)("div", {
                className: "singleMainComp",
                children: [
                  Object(me.jsxs)("div", {
                    className: "singleMainComp_top",
                    children: [
                      Object(me.jsx)(r.b, {
                        to: "/".concat(t.post_user[0].username),
                        className: "link",
                        children: Object(me.jsxs)("div", {
                          className: "singleMainComp_profile_n_logo",
                          children: [
                            Object(me.jsx)("img", {
                              src: t.post_user[0].avatar,
                              alt: "",
                            }),
                            Object(me.jsx)("p", {
                              children: t.post_user[0].username,
                            }),
                          ],
                        }),
                      }),
                      Object(me.jsx)("div", {
                        className: "singleMainComp_t_dot",
                        children: Object(me.jsx)(xe.a, {}),
                      }),
                    ],
                  }),
                  Object(me.jsx)("div", {
                    className: "singleMainComp_media_file",
                    onClick: function () {
                      return p(t._id);
                    },
                    children: Object(me.jsx)("img", { src: t.media, alt: "" }),
                  }),
                  Object(me.jsxs)("div", {
                    className: "singleMainComp_activity",
                    children: [
                      Object(me.jsxs)("div", {
                        className: "singleMainComp_activity_icons",
                        children: [
                          Object(me.jsxs)("div", {
                            className: "singleMainComp_activity_icon",
                            children: [
                              Object(me.jsx)(ve.a, {
                                className: "singleMainComp_activity_iconr sss",
                              }),
                              Object(me.jsx)(_e.a, {
                                className: "singleMainComp_activity_iconr",
                              }),
                              Object(me.jsx)(ye.a, {
                                className: "singleMainComp_activity_iconr",
                              }),
                            ],
                          }),
                          Object(me.jsx)("div", {
                            className: "singleMainComp_activity_save_icon",
                            children: Object(me.jsx)(Ne.a, {
                              className: "singleMainComp_activity_iconr",
                            }),
                          }),
                        ],
                      }),
                      Object(me.jsx)("div", {
                        className: "singleMainComp_l_count",
                        children:
                          t &&
                          Object(me.jsxs)(me.Fragment, {
                            children: [t.likes.length, " Likes"],
                          }),
                      }),
                      Object(me.jsxs)("div", {
                        className: "singleMainComp_description",
                        children: [
                          Object(me.jsx)("span", {
                            className: "user_namesmc",
                            children: t.post_user[0].username,
                          }),
                          Object(me.jsx)("span", { children: t.caption }),
                        ],
                      }),
                      Object(me.jsx)("div", {
                        className: "view_comment_count",
                        children: Object(me.jsxs)("p", {
                          onClick: function () {
                            return p(t._id);
                          },
                          children: [
                            "View all ",
                            t.comments.length,
                            " comments",
                          ],
                        }),
                      }),
                      Object(me.jsx)("div", {
                        className: "singleMainComp_description_time",
                        children: Object(we.a)(t.createdAt),
                      }),
                    ],
                  }),
                ],
              }),
              o && Object(me.jsx)(Ce, { setShowPOPUPP: l }),
            ],
          });
        },
        Ue =
          (n(93),
          function () {
            var e = Object(u.b)(),
              t = Object(u.c)(function (e) {
                return e.userSuggestion;
              }).suggestionUser,
              n = Object(u.c)(function (e) {
                return e.feedPosts;
              }).feedPosts,
              a = Object(u.c)(function (e) {
                return e.user;
              }).user;
            return (
              Object(c.useEffect)(
                function () {
                  e(
                    (function () {
                      var e = Object(O.a)(
                        b.a.mark(function e(t) {
                          var n, c, a;
                          return b.a.wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      t({ type: L }),
                                      (e.prev = 1),
                                      (e.next = 4),
                                      f.get("/user_suggestion")
                                    );
                                  case 4:
                                    (n = e.sent),
                                      t({
                                        type: F,
                                        payload: n.data.getRandomUser,
                                      }),
                                      (e.next = 11);
                                    break;
                                  case 8:
                                    (e.prev = 8),
                                      (e.t0 = e.catch(1)),
                                      t({
                                        type: T,
                                        payload:
                                          null === e.t0 ||
                                          void 0 === e.t0 ||
                                          null === (c = e.t0.response) ||
                                          void 0 === c ||
                                          null === (a = c.data) ||
                                          void 0 === a
                                            ? void 0
                                            : a.error,
                                      });
                                  case 11:
                                  case "end":
                                    return e.stop();
                                }
                            },
                            e,
                            null,
                            [[1, 8]]
                          );
                        })
                      );
                      return function (t) {
                        return e.apply(this, arguments);
                      };
                    })()
                  ),
                    e(
                      (function () {
                        var e = Object(O.a)(
                          b.a.mark(function e(t) {
                            var n, c, a;
                            return b.a.wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        t({ type: X }),
                                        (e.prev = 1),
                                        (e.next = 4),
                                        f.post("/feedPosts")
                                      );
                                    case 4:
                                      (n = e.sent),
                                        t({
                                          type: Z,
                                          payload: n.data.feedPosts,
                                        }),
                                        (e.next = 11);
                                      break;
                                    case 8:
                                      (e.prev = 8),
                                        (e.t0 = e.catch(1)),
                                        t({
                                          type: "GET_FEED_POSTS_FAIL",
                                          payload:
                                            null === e.t0 ||
                                            void 0 === e.t0 ||
                                            null === (c = e.t0.response) ||
                                            void 0 === c ||
                                            null === (a = c.data) ||
                                            void 0 === a
                                              ? void 0
                                              : a.error,
                                        });
                                    case 11:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              null,
                              [[1, 8]]
                            );
                          })
                        );
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })()
                    );
                },
                [e]
              ),
              Object(me.jsxs)("div", {
                className: "homeFeed",
                children: [
                  Object(me.jsx)("div", {
                    className: "homeFeed_left",
                    children:
                      n.length > 0 &&
                      n.map(function (e, t) {
                        return Object(me.jsx)(ke, { feedPost: e }, t);
                      }),
                  }),
                  Object(me.jsx)("div", {
                    className: "homeFeed_right",
                    children: Object(me.jsxs)("div", {
                      className: "homeFeed_right_container",
                      children: [
                        Object(me.jsx)("h4", {
                          children: "Suggestions For You",
                        }),
                        t &&
                          a &&
                          t.map(function (e, t) {
                            return Object(me.jsx)(
                              "div",
                              {
                                className: "homeFeed_right_sug",
                                children: Object(me.jsx)(ge, {
                                  follow: !0,
                                  users: e,
                                  followingUser: a.following,
                                }),
                              },
                              t
                            );
                          }),
                      ],
                    }),
                  }),
                ],
              })
            );
          }),
        Pe = n(126),
        Le = n(127),
        Fe = n(128),
        Te = n(129),
        Re = n(130),
        Ie = n(125),
        Me = n(23),
        Ae = n(53),
        De = Object(Ae.a)({
          apiKey: "AIzaSyARS9CxHRllYXDCkktrQKx1nN3CzSixm7c",
          authDomain: "instagram-clone-f85d1.firebaseapp.com",
          projectId: "instagram-clone-f85d1",
          storageBucket: "instagram-clone-f85d1.appspot.com",
          messagingSenderId: "127217867774",
          appId: "1:127217867774:web:3de91fded5ddea80207eaf",
        }),
        Ge = Object(Me.b)(De),
        Qe =
          (n(95),
          n(96),
          function () {
            return Object(me.jsx)("div", {
              className: "Loading",
              children: Object(me.jsx)("span", { className: "loading_span" }),
            });
          }),
        Be =
          (n(97),
          function () {
            return Object(me.jsx)("div", {
              children: Object(me.jsx)("div", {
                class: "main-container",
                children: Object(me.jsxs)("div", {
                  class: "check-container",
                  children: [
                    Object(me.jsx)("div", {
                      class: "check-background",
                      children: Object(me.jsx)("svg", {
                        viewBox: "0 0 65 51",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: Object(me.jsx)("path", {
                          d: "M7 25L27.3077 44L58.5 7",
                          stroke: "white",
                          "stroke-width": "13",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                        }),
                      }),
                    }),
                    Object(me.jsx)("div", { class: "check-shadow" }),
                  ],
                }),
              }),
            });
          }),
        We = function () {
          var e = Object(u.c)(function (e) {
              return e.posts;
            }),
            t = e.loading,
            n = e.isCreated,
            a = Object(u.b)(),
            s = Object(c.useState)(""),
            r = Object(j.a)(s, 2),
            i = r[0],
            o = r[1],
            l = Object(c.useState)(""),
            d = Object(j.a)(l, 2),
            p = d[0],
            m = d[1];
          return Object(me.jsx)("div", {
            className: "add_posts",
            children: t
              ? Object(me.jsx)(Qe, {})
              : Object(me.jsx)("div", {
                  children: n
                    ? Object(me.jsx)(Be, {})
                    : Object(me.jsxs)("div", {
                        className: "add_posts_container",
                        children: [
                          Object(me.jsxs)("div", {
                            className: "add_posts_container_top",
                            children: [
                              Object(me.jsx)("h3", {
                                children: "Create new post",
                              }),
                              Object(me.jsx)("button", {
                                onClick: function () {
                                  var e;
                                  a(
                                    ((e = { media: i, caption: p }),
                                    (function () {
                                      var t = Object(O.a)(
                                        b.a.mark(function t(n) {
                                          var c;
                                          return b.a.wrap(
                                            function (t) {
                                              for (;;)
                                                switch ((t.prev = t.next)) {
                                                  case 0:
                                                    return (
                                                      (t.prev = 0),
                                                      n({ type: q }),
                                                      (t.next = 4),
                                                      f.post("/post/create", e)
                                                    );
                                                  case 4:
                                                    (c = t.sent),
                                                      n({
                                                        type: V,
                                                        payload: c.data.post,
                                                      }),
                                                      (t.next = 11);
                                                    break;
                                                  case 8:
                                                    (t.prev = 8),
                                                      (t.t0 = t.catch(0)),
                                                      n({
                                                        type: z,
                                                        payload:
                                                          t.t0.response.data
                                                            .error,
                                                      });
                                                  case 11:
                                                  case "end":
                                                    return t.stop();
                                                }
                                            },
                                            t,
                                            null,
                                            [[0, 8]]
                                          );
                                        })
                                      );
                                      return function (e) {
                                        return t.apply(this, arguments);
                                      };
                                    })())
                                  );
                                },
                                children: "Share",
                              }),
                            ],
                          }),
                          i &&
                            Object(me.jsx)("div", {
                              className: "add_posts_container_img",
                              children: Object(me.jsx)("img", {
                                src: i,
                                alt: "",
                              }),
                            }),
                          !i &&
                            Object(me.jsx)("div", {
                              className: "add_posts_container_icons",
                              children: Object(me.jsx)(Ie.a, {
                                className: "add_posts_container_icon",
                              }),
                            }),
                          Object(me.jsxs)("div", {
                            className: "post_media_input",
                            children: [
                              Object(me.jsx)("label", {
                                htmlFor: "postMedia",
                                children: "Select from computer",
                              }),
                              Object(me.jsx)("input", {
                                type: "file",
                                name: "media",
                                onChange: function (e) {
                                  !(function (e) {
                                    var t = new Date().getTime() + e.name,
                                      n = Object(Me.c)(Ge, "Posts/".concat(t)),
                                      c = Object(Me.d)(n, e);
                                    c.on(
                                      "state_changed",
                                      function (e) {
                                        switch (
                                          (e.bytesTransferred,
                                          e.totalBytes,
                                          e.state)
                                        ) {
                                          case "paused":
                                            console.log("Upload is paused");
                                            break;
                                          case "running":
                                            console.log("Upload is running");
                                        }
                                      },
                                      function (e) {
                                        console.log(
                                          "Firebase Upload error" + e
                                        );
                                      },
                                      function () {
                                        Object(Me.a)(c.snapshot.ref).then(
                                          function (e) {
                                            o(e);
                                          }
                                        );
                                      }
                                    );
                                  })(e.target.files[0]);
                                },
                                id: "postMedia",
                              }),
                            ],
                          }),
                          Object(me.jsx)("div", {
                            className: "post_caption",
                            children: Object(me.jsx)("textarea", {
                              name: "",
                              id: "",
                              required: !0,
                              onChange: function (e) {
                                return m(e.target.value);
                              },
                              placeholder: "Write a caption...",
                            }),
                          }),
                        ],
                      }),
                }),
          });
        },
        qe =
          (n(98),
          function () {
            var e = Object(c.useState)(!1),
              t = Object(j.a)(e, 2),
              n = t[0],
              a = t[1],
              s = Object(u.c)(function (e) {
                return e.user;
              }).user,
              i = Object(u.b)();
            return Object(me.jsxs)(me.Fragment, {
              children: [
                n &&
                  Object(me.jsxs)("div", {
                    className: "add_post_comp",
                    children: [
                      Object(me.jsx)("div", {
                        className: "close_post_model",
                        onClick: function () {
                          (document.body.style.overflow = "scroll"),
                            a(!1),
                            i({ type: K });
                        },
                        children: Object(me.jsx)(Pe.a, {
                          style: { fontSize: "2.5rem" },
                        }),
                      }),
                      Object(me.jsx)("div", {
                        className: "post_com_call",
                        children: Object(me.jsx)(We, {}),
                      }),
                    ],
                  }),
                Object(me.jsx)("div", {
                  className: "navbar",
                  children: Object(me.jsxs)("div", {
                    className: "container",
                    children: [
                      Object(me.jsx)("div", {
                        className: "logo",
                        children: Object(me.jsx)(r.b, {
                          to: "/",
                          children: Object(me.jsx)("img", {
                            src: "https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png",
                            alt: "",
                          }),
                        }),
                      }),
                      Object(me.jsx)("div", {
                        className: "search",
                        children: Object(me.jsx)("input", {
                          type: "text",
                          placeholder: "Search",
                        }),
                      }),
                      Object(me.jsxs)("div", {
                        className: "icons",
                        children: [
                          s &&
                            Object(me.jsxs)(me.Fragment, {
                              children: [
                                Object(me.jsx)("div", {
                                  children: Object(me.jsx)(r.b, {
                                    to: "/",
                                    className: "link",
                                    children: Object(me.jsx)(Le.a, {
                                      className: "icon",
                                    }),
                                  }),
                                }),
                                Object(me.jsx)("div", {
                                  children: Object(me.jsx)(ye.a, {
                                    className: "icon",
                                  }),
                                }),
                                Object(me.jsx)("div", {
                                  children: Object(me.jsx)("span", {
                                    onClick: function () {
                                      (document.body.style.overflow = "hidden"),
                                        a(!0);
                                    },
                                    children: Object(me.jsx)(Fe.a, {
                                      className: "icon",
                                    }),
                                  }),
                                }),
                                Object(me.jsx)("div", {
                                  children: Object(me.jsx)(Te.a, {
                                    className: "icon",
                                  }),
                                }),
                                Object(me.jsx)("div", {
                                  children: Object(me.jsx)(ve.a, {
                                    className: "icon",
                                  }),
                                }),
                              ],
                            }),
                          Object(me.jsx)("div", {
                            className: "profile",
                            children: s
                              ? Object(me.jsx)(r.b, {
                                  to: "/".concat(s.username),
                                  className: "link",
                                  children: Object(me.jsx)(Re.a, {
                                    className: "icon",
                                  }),
                                })
                              : Object(me.jsxs)("div", {
                                  className: "weiofhjdc",
                                  children: [
                                    Object(me.jsx)(r.b, {
                                      to: "/signup",
                                      className: "link",
                                      children: Object(me.jsx)("div", {
                                        children: "Sign Up",
                                      }),
                                    }),
                                    Object(me.jsx)(r.b, {
                                      to: "/login",
                                      className: "link",
                                      children: Object(me.jsx)("button", {
                                        className: "login_nav",
                                        children: "Login",
                                      }),
                                    }),
                                  ],
                                }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            });
          }),
        Ve = function () {
          return Object(me.jsxs)(me.Fragment, {
            children: [
              Object(me.jsx)(qe, {}),
              Object(me.jsx)("div", {
                className: "home",
                children: Object(me.jsx)(Ue, {}),
              }),
            ],
          });
        },
        ze = (n(99), n(131)),
        He = n(132),
        Ye =
          (n(100),
          function (e) {
            var t = e.setShowsetting,
              n = Object(u.b)(),
              c = Object(i.g)();
            Object(u.c)(function (e) {
              return e.user;
            }).user;
            return Object(me.jsx)("div", {
              className: "containerPS",
              onClick: function (e) {
                e.target.classList.contains("containerPS") && t(!1);
              },
              children: Object(me.jsxs)("div", {
                className: "profile_setting",
                children: [
                  Object(me.jsx)("div", {
                    onClick: function () {
                      n(
                        (function () {
                          var e = Object(O.a)(
                            b.a.mark(function e(t) {
                              return b.a.wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.prev = 0),
                                          (e.next = 3),
                                          f.get("/logout")
                                        );
                                      case 3:
                                        t({ type: C }), (e.next = 9);
                                        break;
                                      case 6:
                                        (e.prev = 6),
                                          (e.t0 = e.catch(0)),
                                          t({
                                            type: E,
                                            payload: "Failed to Logout",
                                          });
                                      case 9:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                null,
                                [[0, 6]]
                              );
                            })
                          );
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })()
                      ),
                        c("/login");
                    },
                    children: "Logout",
                  }),
                  Object(me.jsx)("div", {
                    onClick: function () {
                      return t(!1);
                    },
                    children: "Cencel",
                  }),
                ],
              }),
            });
          }),
        Je =
          (n(101),
          function (e) {
            var t = e.userId,
              n = (e.profile, Object(u.b)()),
              a = Object(c.useState)(null),
              s = Object(j.a)(a, 2),
              i = s[0],
              o = s[1],
              l = Object(u.c)(function (e) {
                return e.user;
              }).user;
            Object(c.useEffect)(
              function () {
                (function () {
                  var e = Object(O.a)(
                    b.a.mark(function e(t) {
                      var n;
                      return b.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  (e.next = 3),
                                  f.get("/user/".concat(t))
                                );
                              case 3:
                                (n = e.sent), o(n.data.user), (e.next = 10);
                                break;
                              case 7:
                                (e.prev = 7),
                                  (e.t0 = e.catch(0)),
                                  console.log(e.t0.message);
                              case 10:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[0, 7]]
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })()(t);
              },
              [t]
            );
            return Object(me.jsx)(me.Fragment, {
              children:
                i &&
                Object(me.jsx)("div", {
                  className: "profilefetchById",
                  children: Object(me.jsxs)("div", {
                    className: "profilefetchById_container",
                    children: [
                      Object(me.jsx)(r.b, {
                        to: "/".concat(i.username),
                        className: "link",
                        children: Object(me.jsx)("img", {
                          src: i.avatar,
                          alt: "",
                        }),
                      }),
                      Object(me.jsx)(r.b, {
                        to: "/".concat(i.username),
                        className: "link",
                        children: Object(me.jsxs)("div", {
                          className: "profilefetchById_name",
                          children: [
                            Object(me.jsx)("p", { children: i.username }),
                            Object(me.jsx)("p", { children: i.fullname }),
                          ],
                        }),
                      }),
                      l &&
                        l.following.includes(i._id) &&
                        Object(me.jsx)("button", {
                          onClick: function () {
                            return (e = i._id), void n(Oe(e));
                            var e;
                          },
                          children: "unfollow",
                        }),
                      l &&
                        !l.following.includes(i._id) &&
                        Object(me.jsx)("button", {
                          onClick: function () {
                            return (e = i._id), void n(be(e));
                            var e;
                          },
                          className: "jwfhjcwedw",
                          children: "follow",
                        }),
                    ],
                  }),
                }),
            });
          }),
        Ke =
          (n(102),
          function (e) {
            var t = e.setFollowingListModel,
              n = Object(u.c)(function (e) {
                return e.profile;
              }).profile;
            return Object(me.jsx)("div", {
              className: "following_list",
              onClick: function (e) {
                e.target.classList.contains("following_list") &&
                  (t(!1), (document.body.style.overflow = "scroll"));
              },
              children: Object(me.jsxs)("div", {
                className: "followingList_container",
                children: [
                  Object(me.jsx)("h4", { children: "Following" }),
                  Object(me.jsx)("div", {
                    className: "following_list_call",
                    children:
                      n &&
                      n.following.map(function (e, t) {
                        return Object(me.jsx)(Je, { userId: e, profile: n }, t);
                      }),
                  }),
                ],
              }),
            });
          }),
        Xe =
          (n(103),
          function (e) {
            var t = e.setFollowerListModel,
              n = Object(u.c)(function (e) {
                return e.profile;
              }).profile;
            return Object(me.jsx)("div", {
              className: "following_list",
              onClick: function (e) {
                e.target.classList.contains("following_list") &&
                  (t(!1), (document.body.style.overflow = "scroll"));
              },
              children: Object(me.jsxs)("div", {
                className: "followingList_container",
                children: [
                  Object(me.jsx)("h4", { children: "Follower" }),
                  Object(me.jsx)("div", {
                    className: "following_list_call",
                    children:
                      n &&
                      n.follower.map(function (e, t) {
                        return Object(me.jsx)(Je, { userId: e }, t);
                      }),
                  }),
                ],
              }),
            });
          }),
        Ze =
          (n(104),
          function (e) {
            var t = e.setLoginpopup,
              n = Object(u.b)(),
              a = Object(c.useState)({ email: "", password: "" }),
              s = Object(j.a)(a, 2),
              i = s[0],
              p = s[1],
              b = function (e) {
                p(
                  Object(l.a)(
                    Object(l.a)({}, i),
                    {},
                    Object(o.a)({}, e.target.name, e.target.value)
                  )
                );
              },
              O = function (e) {
                e.preventDefault(), n(pe(i.email, i.password));
              };
            return Object(me.jsx)("div", {
              className: "LoginPopup",
              onClick: function (e) {
                e.target.classList.contains("LoginPopup") &&
                  (t(!1), (document.body.style.overflow = "auto"));
              },
              children: Object(me.jsxs)("div", {
                className: "container",
                children: [
                  Object(me.jsx)("div", {
                    className: "auth-logo-image",
                    children: Object(me.jsx)("img", {
                      src: "https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png",
                      alt: "",
                    }),
                  }),
                  Object(me.jsxs)("button", {
                    className: "not-signup-page",
                    children: [
                      Object(me.jsx)(d.a, { className: "icon" }),
                      " Log in with Facebook",
                    ],
                  }),
                  Object(me.jsxs)("div", {
                    className: "not-signup-page",
                    children: [
                      Object(me.jsx)("span", { className: "line" }),
                      Object(me.jsx)("span", {
                        className: "or",
                        children: "OR",
                      }),
                      Object(me.jsx)("span", { className: "line" }),
                    ],
                  }),
                  Object(me.jsxs)("form", {
                    onSubmit: O,
                    children: [
                      Object(me.jsx)("input", {
                        type: "email",
                        name: "email",
                        required: !0,
                        onChange: b,
                        placeholder: "Email",
                      }),
                      Object(me.jsx)("input", {
                        type: "password",
                        name: "password",
                        required: !0,
                        placeholder: "Password",
                        onChange: b,
                      }),
                      Object(me.jsx)("button", {
                        type: "submit",
                        onClick: O,
                        className: "login-page",
                        children: "Log In",
                      }),
                    ],
                  }),
                  Object(me.jsx)("span", {
                    className: "login-page",
                    children: "Forgot Password?",
                  }),
                  Object(me.jsxs)("p", {
                    children: [
                      "Don't have an account?",
                      Object(me.jsx)(r.b, {
                        to: "/signup",
                        onClick: function () {
                          document.body.style.overflow = "auto";
                        },
                        children: Object(me.jsx)("span", {
                          children: "Sign up",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            });
          }),
        $e = function () {
          var e = Object(i.h)().username,
            t = Object(u.c)(function (e) {
              return e.user;
            }).user,
            n = Object(u.c)(function (e) {
              return e.profile;
            }).profile,
            a = Object(u.c)(function (e) {
              return e.posts;
            }).posts,
            s = Object(c.useState)(!1),
            r = Object(j.a)(s, 2),
            o = r[0],
            l = r[1],
            d = Object(c.useState)(!1),
            p = Object(j.a)(d, 2),
            m = p[0],
            h = p[1],
            g = Object(c.useState)(!1),
            x = Object(j.a)(g, 2),
            v = x[0],
            _ = x[1],
            y = Object(c.useState)(0),
            N = Object(j.a)(y, 2),
            w = (N[0], N[1], Object(c.useState)(!1)),
            S = Object(j.a)(w, 2),
            E = S[0],
            C = S[1],
            L = Object(c.useState)(!1),
            F = Object(j.a)(L, 2),
            T = F[0],
            R = F[1],
            I = Object(u.b)(),
            M = function () {
              C(!0), (document.body.style.overflow = "hidden");
            };
          Object(c.useEffect)(
            function () {
              I(
                (function (e) {
                  return (function () {
                    var t = Object(O.a)(
                      b.a.mark(function t(n) {
                        var c;
                        return b.a.wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    n({ type: Q }),
                                    (t.prev = 1),
                                    (t.next = 4),
                                    f.get("/user/profile/".concat(e))
                                  );
                                case 4:
                                  (c = t.sent),
                                    n({ type: B, payload: c.data.profile }),
                                    n(de(c.data.profile._id)),
                                    (t.next = 12);
                                  break;
                                case 9:
                                  (t.prev = 9),
                                    (t.t0 = t.catch(1)),
                                    n({
                                      type: W,
                                      payload: t.t0.response.data.error,
                                    });
                                case 12:
                                case "end":
                                  return t.stop();
                              }
                          },
                          t,
                          null,
                          [[1, 9]]
                        );
                      })
                    );
                    return function (e) {
                      return t.apply(this, arguments);
                    };
                  })();
                })(e)
              ),
                h(!1),
                _(!1),
                (document.body.style.overflow = "auto");
            },
            [e, I]
          );
          return Object(me.jsxs)(me.Fragment, {
            children: [
              Object(me.jsx)(qe, {}),
              n &&
                Object(me.jsxs)("div", {
                  className: "profile",
                  children: [
                    Object(me.jsxs)("div", {
                      className: "profile_info",
                      children: [
                        Object(me.jsx)("div", {
                          className: "profile_pic",
                          children: Object(me.jsxs)("div", {
                            className: "profile_pic_con",
                            children: [
                              Object(me.jsx)("img", {
                                src: n.avatar
                                  ? n.avatar
                                  : "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
                                alt: "avatar",
                              }),
                              t &&
                                t._id === n._id &&
                                Object(me.jsx)("input", {
                                  type: "file",
                                  name: "avatar",
                                  id: "",
                                  onChange: function (e) {
                                    var t =
                                        new Date().getTime() +
                                        e.target.files[0].name,
                                      n = Object(Me.c)(Ge, "Avatar/".concat(t)),
                                      c = Object(Me.d)(n, e.target.files[0]);
                                    c.on(
                                      "state_changed",
                                      function (e) {
                                        e.bytesTransferred, e.totalBytes;
                                        switch (e.state) {
                                          case "paused":
                                            console.log("Upload is paused");
                                            break;
                                          case "running":
                                            console.log("Upload is running");
                                        }
                                      },
                                      function (e) {
                                        console.log(
                                          "Firebase Upload error" + e
                                        );
                                      },
                                      function () {
                                        Object(Me.a)(c.snapshot.ref).then(
                                          function (e) {
                                            var t;
                                            I(
                                              ((t = { avatar: e }),
                                              (function () {
                                                var e = Object(O.a)(
                                                  b.a.mark(function e(n) {
                                                    var c;
                                                    return b.a.wrap(
                                                      function (e) {
                                                        for (;;)
                                                          switch (
                                                            (e.prev = e.next)
                                                          ) {
                                                            case 0:
                                                              return (
                                                                n({ type: k }),
                                                                (e.prev = 1),
                                                                (e.next = 4),
                                                                f.put(
                                                                  "/user/update",
                                                                  t
                                                                )
                                                              );
                                                            case 4:
                                                              (c = e.sent),
                                                                n({
                                                                  type: U,
                                                                  payload:
                                                                    c.data
                                                                      .updateUser,
                                                                }),
                                                                (e.next = 11);
                                                              break;
                                                            case 8:
                                                              (e.prev = 8),
                                                                (e.t0 =
                                                                  e.catch(1)),
                                                                n({
                                                                  type: P,
                                                                  payload:
                                                                    e.t0
                                                                      .response
                                                                      .data
                                                                      .error,
                                                                });
                                                            case 11:
                                                            case "end":
                                                              return e.stop();
                                                          }
                                                      },
                                                      e,
                                                      null,
                                                      [[1, 8]]
                                                    );
                                                  })
                                                );
                                                return function (t) {
                                                  return e.apply(
                                                    this,
                                                    arguments
                                                  );
                                                };
                                              })())
                                            );
                                          }
                                        );
                                      }
                                    );
                                  },
                                }),
                            ],
                          }),
                        }),
                        Object(me.jsx)("div", {
                          className: "profile_info_content",
                          children: Object(me.jsxs)("div", {
                            className: "profile_info_content_con",
                            children: [
                              Object(me.jsxs)("div", {
                                className: "profile_user",
                                children: [
                                  Object(me.jsx)("p", { children: n.username }),
                                  t &&
                                    t._id === n._id &&
                                    Object(me.jsx)("button", {
                                      children: "Edit Profile",
                                    }),
                                  t &&
                                    t._id !== n._id &&
                                    !t.following.includes(n._id) &&
                                    Object(me.jsx)("button", {
                                      className: "follow",
                                      onClick: function () {
                                        return (e = n._id), void I(be(e));
                                        var e;
                                      },
                                      children: "Follow",
                                    }),
                                  t &&
                                    t._id !== n._id &&
                                    t.following.includes(n._id) &&
                                    Object(me.jsx)("button", {
                                      className: "unfollow",
                                      onClick: function () {
                                        return (e = n._id), void I(Oe(e));
                                        var e;
                                      },
                                      children: "Unfollow",
                                    }),
                                  t &&
                                    t._id === n._id &&
                                    Object(me.jsx)("div", {
                                      onClick: function () {
                                        return l(!0);
                                      },
                                      style: { cursor: "pointer" },
                                      children: Object(me.jsx)(ze.a, {}),
                                    }),
                                ],
                              }),
                              Object(me.jsxs)("div", {
                                className: "profile_dynamic_data",
                                children: [
                                  Object(me.jsxs)("p", {
                                    children: [n.posts, " posts"],
                                  }),
                                  t
                                    ? Object(me.jsxs)("p", {
                                        onClick: function () {
                                          _(!0),
                                            (document.body.style.overflow =
                                              "hidden");
                                        },
                                        children: [
                                          n.follower ? n.follower.length : 0,
                                          " follower",
                                        ],
                                      })
                                    : Object(me.jsxs)("p", {
                                        onClick: M,
                                        children: [
                                          n.follower ? n.follower.length : 0,
                                          " follower",
                                        ],
                                      }),
                                  t
                                    ? Object(me.jsxs)("p", {
                                        onClick: function () {
                                          h(!0),
                                            (document.body.style.overflow =
                                              "hidden");
                                        },
                                        children: [
                                          n.following ? n.following.length : 0,
                                          " ",
                                          "following",
                                        ],
                                      })
                                    : Object(me.jsxs)("p", {
                                        onClick: M,
                                        children: [
                                          n.following ? n.following.length : 0,
                                          " ",
                                          "following",
                                        ],
                                      }),
                                ],
                              }),
                              Object(me.jsx)("div", {
                                className: "profile_fullname",
                                children: n.fullname,
                              }),
                              Object(me.jsx)("div", {
                                className: "profile_bio",
                                children: n.bio,
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    Object(me.jsxs)("div", {
                      className: "my_content_nav",
                      children: [
                        Object(me.jsxs)("div", {
                          children: [Object(me.jsx)(He.a, {}), "POSTS"],
                        }),
                        Object(me.jsxs)("div", {
                          children: [Object(me.jsx)(Ne.a, {}), "SAVED"],
                        }),
                      ],
                    }),
                    Object(me.jsx)("div", {
                      className: "profile_media_container",
                      children:
                        a &&
                        a.map(function (e, t) {
                          return Object(me.jsx)(
                            "div",
                            {
                              className: "profile_media",
                              onClick: function () {
                                return (t = e._id), R(!0), void I(ue(t));
                                var t;
                              },
                              children: Object(me.jsx)("img", {
                                src: e.media,
                                alt: "",
                              }),
                            },
                            t
                          );
                        }),
                    }),
                  ],
                }),
              o && Object(me.jsx)(Ye, { setShowsetting: l }),
              m && Object(me.jsx)(Ke, { setFollowingListModel: h }),
              v && Object(me.jsx)(Xe, { setFollowerListModel: _ }),
              E && !t && Object(me.jsx)(Ze, { setLoginpopup: C }),
              T && Object(me.jsx)(Ce, { setShowPOPUPP: R }),
            ],
          });
        },
        et =
          (n(105),
          {
            1: function (e) {
              var t = e.onNext;
              return Object(me.jsx)("div", {
                className: "signup",
                children: Object(me.jsx)(fe, { isSignPage: !0, onNext: t }),
              });
            },
            2: function () {
              var e = Object(c.useState)(
                  "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                ),
                t = Object(j.a)(e, 2),
                n = t[0],
                a = t[1];
              return Object(me.jsx)("div", {
                className: "setUserInfo",
                children: Object(me.jsxs)("div", {
                  className: "setUserInfo_container",
                  children: [
                    Object(me.jsx)("img", {
                      src: "https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png",
                      alt: "",
                    }),
                    Object(me.jsx)("div", {
                      className: "set_profile_img",
                      children: Object(me.jsx)("img", { src: n, alt: "" }),
                    }),
                    Object(me.jsx)("input", {
                      type: "file",
                      onChange: function (e) {
                        return a(e.target.files[0]);
                      },
                      className: "set_input_file",
                    }),
                    Object(me.jsx)("textarea", {
                      className: "set_profile_textarea",
                      type: "text",
                      placeholder: "Bio...",
                    }),
                    Object(me.jsx)("button", { children: "Next" }),
                  ],
                }),
              });
            },
          }),
        tt = function () {
          var e = Object(c.useState)(1),
            t = Object(j.a)(e, 2),
            n = t[0],
            a = t[1],
            s = et[n];
          return Object(me.jsx)("div", {
            className: "register",
            children: Object(me.jsx)(s, {
              onNext: function () {
                a(n + 1);
              },
            }),
          });
        },
        nt = function () {
          var e = Object(u.c)(function (e) {
              return e.user;
            }),
            t = e.isAuthenticated,
            n = (e.user, e.loading, Object(u.b)());
          return (
            Object(c.useEffect)(
              function () {
                n(
                  (function () {
                    var e = Object(O.a)(
                      b.a.mark(function e(t) {
                        var n, c, a, s;
                        return b.a.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.prev = 0),
                                    t({ type: S }),
                                    (e.next = 4),
                                    f.get("/me")
                                  );
                                case 4:
                                  (n = e.sent),
                                    (c = n.data),
                                    t({ type: w, payload: c.user }),
                                    t({ type: B, payload: c.user }),
                                    (e.next = 13);
                                  break;
                                case 10:
                                  (e.prev = 10),
                                    (e.t0 = e.catch(0)),
                                    t({
                                      type: N,
                                      payload:
                                        null === e.t0 ||
                                        void 0 === e.t0 ||
                                        null === (a = e.t0.response) ||
                                        void 0 === a ||
                                        null === (s = a.data) ||
                                        void 0 === s
                                          ? void 0
                                          : s.error,
                                    });
                                case 13:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          null,
                          [[0, 10]]
                        );
                      })
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })()
                );
              },
              [n]
            ),
            Object(me.jsx)(r.a, {
              children: Object(me.jsxs)(i.d, {
                children: [
                  Object(me.jsx)(i.b, {
                    path: "/",
                    element: t
                      ? Object(me.jsx)(Ve, {})
                      : Object(me.jsx)(i.a, { to: "/login" }),
                  }),
                  Object(me.jsx)(i.b, {
                    exact: !0,
                    path: "/signup",
                    element: t
                      ? Object(me.jsx)(i.a, { replace: !0, to: "/" })
                      : Object(me.jsx)(tt, {}),
                  }),
                  Object(me.jsx)(i.b, {
                    exact: !0,
                    path: "/login",
                    element: t
                      ? Object(me.jsx)(i.a, { replace: !0, to: "/" })
                      : Object(me.jsx)(he, {}),
                  }),
                  Object(me.jsx)(i.b, {
                    exact: !0,
                    path: "/:username",
                    element: Object(me.jsx)($e, {}),
                  }),
                  Object(me.jsx)(i.b, {
                    exact: !0,
                    path: "/success",
                    element: Object(me.jsx)(Be, {}),
                  }),
                ],
              }),
            })
          );
        },
        ct = n(36),
        at = n(54),
        st = n(55),
        rt = n(19),
        it = Object(ct.combineReducers)({
          user: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { user: {} },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case x:
              case y:
              case S:
                return { loading: !0, isAuthenticated: !1 };
              case g:
              case _:
              case w:
                return Object(l.a)(
                  Object(l.a)({}, e),
                  {},
                  { loading: !1, isAuthenticated: !0, user: t.payload }
                );
              case C:
                return { loading: !1, isAuthenticated: !1, user: null };
              case E:
                return Object(l.a)(
                  Object(l.a)({}, e),
                  {},
                  { loading: !1, error: t.payload }
                );
              case h:
              case v:
                return Object(l.a)(
                  Object(l.a)({}, e),
                  {},
                  {
                    loading: !1,
                    isAuthenticated: !1,
                    user: null,
                    error: t.payload,
                  }
                );
              case N:
                return {
                  loading: !1,
                  isAuthenticated: !1,
                  user: null,
                  error: t.payload,
                };
              case R:
              case A:
                return Object(l.a)(Object(l.a)({}, e), {}, { loading: !0 });
              case I:
                return Object(l.a)(
                  Object(l.a)({}, e),
                  {},
                  {
                    loading: !1,
                    user: Object(l.a)(
                      Object(l.a)({}, e.user),
                      {},
                      {
                        following: [].concat(Object(rt.a)(e.user.following), [
                          t.payload,
                        ]),
                      }
                    ),
                  }
                );
              case D:
                return Object(l.a)(
                  Object(l.a)({}, e),
                  {},
                  {
                    loading: !1,
                    user: Object(l.a)(
                      Object(l.a)({}, e.user),
                      {},
                      {
                        following: e.user.following.filter(function (e) {
                          return e !== t.payload;
                        }),
                      }
                    ),
                  }
                );
              case M:
              case G:
                return Object(l.a)(Object(l.a)({}, e), {}, { loading: !1 });
              default:
                return e;
            }
          },
          posts: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case q:
                return Object(l.a)(
                  Object(l.a)({}, e),
                  {},
                  { loading: !0, isCreated: !1 }
                );
              case H:
                return { loading: !0, success: !1, posts: [] };
              case V:
                return {
                  loading: !1,
                  success: !0,
                  isCreated: !0,
                  posts: [].concat(Object(rt.a)(e.posts), [t.payload]),
                };
              case Y:
                return { loading: !1, success: !0, posts: t.payload };
              case z:
              case J:
                return {
                  loading: !1,
                  success: !1,
                  isCreated: !1,
                  error: t.payload,
                };
              case K:
                return Object(l.a)(Object(l.a)({}, e), {}, { isCreated: !1 });
              default:
                return Object(l.a)({}, e);
            }
          },
          profile: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { profile: {} },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case k:
              case Q:
                return Object(l.a)(
                  Object(l.a)({}, e),
                  {},
                  { loading: !0, profile: null }
                );
              case U:
              case B:
                return Object(l.a)(
                  Object(l.a)({}, e),
                  {},
                  { loading: !1, profile: t.payload }
                );
              case P:
              case W:
                return Object(l.a)(
                  Object(l.a)({}, e),
                  {},
                  { loading: !1, error: t.payload }
                );
              case R:
              case A:
                return Object(l.a)(Object(l.a)({}, e), {}, { loading: !0 });
              case I:
                return Object(l.a)(
                  Object(l.a)({}, e),
                  {},
                  {
                    loading: !1,
                    profile: Object(l.a)(
                      Object(l.a)({}, e.profile),
                      {},
                      {
                        following: [].concat(
                          Object(rt.a)(e.profile.following),
                          [t.payload]
                        ),
                      }
                    ),
                  }
                );
              case D:
                return Object(l.a)(
                  Object(l.a)({}, e),
                  {},
                  {
                    loading: !1,
                    profile: Object(l.a)(
                      Object(l.a)({}, e.profile),
                      {},
                      {
                        following: e.profile.following.filter(function (e) {
                          return e !== t.payload;
                        }),
                      }
                    ),
                  }
                );
              case M:
              case G:
                return Object(l.a)(Object(l.a)({}, e), {}, { loading: !1 });
              default:
                return e;
            }
          },
          userSuggestion: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case L:
                return Object(l.a)(
                  Object(l.a)({}, e),
                  {},
                  { loading: !0, suggestionUser: null }
                );
              case F:
                return Object(l.a)(
                  Object(l.a)({}, e),
                  {},
                  { loading: !1, suggestionUser: t.payload }
                );
              case T:
                return Object(l.a)(
                  Object(l.a)({}, e),
                  {},
                  { loading: !1, error: t.payload }
                );
              default:
                return e;
            }
          },
          feedPosts: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { feedPosts: {} },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case X:
                return Object(l.a)(
                  Object(l.a)({}, e),
                  {},
                  { loading: !0, isFetch: !1, feedPosts: [] }
                );
              case Z:
                return Object(l.a)(
                  Object(l.a)({}, e),
                  {},
                  { loading: !1, isFetch: !0, feedPosts: t.payload }
                );
              case $:
                return Object(l.a)(Object(l.a)({}, e), {}, { loading: !0 });
              case ee:
              case te:
                return Object(l.a)(Object(l.a)({}, e), {}, { loading: !1 });
              case Z:
                return Object(l.a)(
                  Object(l.a)({}, e),
                  {},
                  { loading: !1, isFetch: !1, error: t.payload }
                );
              default:
                return e;
            }
          },
          singlePost: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { singlePost: {} },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case ne:
                return Object(l.a)(
                  Object(l.a)({}, e),
                  {},
                  { loading: !0, isFetch: !1, singlePost: [] }
                );
              case ce:
                return Object(l.a)(
                  Object(l.a)({}, e),
                  {},
                  { loading: !1, isFetch: !0, singlePost: t.payload }
                );
              case ae:
                return Object(l.a)(
                  Object(l.a)({}, e),
                  {},
                  { loading: !1, isFetch: !1, error: t.payload }
                );
              case se:
                return Object(l.a)(Object(l.a)({}, e), {}, { loading: !0 });
              case re:
                return Object(l.a)(
                  Object(l.a)({}, e),
                  {},
                  {
                    loading: !1,
                    singlePost: Object(l.a)(
                      Object(l.a)({}, e.singlePost),
                      {},
                      {
                        comments: [].concat(
                          Object(rt.a)(e.singlePost.comments),
                          [t.payload]
                        ),
                      }
                    ),
                  }
                );
              case ie:
                return Object(l.a)(Object(l.a)({}, e), {}, { loading: !1 });
              default:
                return e;
            }
          },
          feedPostComment: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { feedPostComment: {} },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case oe:
                return Object(l.a)(
                  Object(l.a)({}, e),
                  {},
                  { loading: !0, isFetch: !1, feedPostComment: [] }
                );
              case le:
                return Object(l.a)(
                  Object(l.a)({}, e),
                  {},
                  { loading: !1, isFetch: !0, feedPostComment: t.payload }
                );
              case je:
                return Object(l.a)(
                  Object(l.a)({}, e),
                  {},
                  { loading: !1, isFetch: !1, error: t.payload }
                );
              default:
                return e;
            }
          },
        }),
        ot = [st.a],
        lt = Object(ct.createStore)(
          it,
          {},
          Object(at.composeWithDevTools)(ct.applyMiddleware.apply(void 0, ot))
        );
      s.a.render(
        Object(me.jsx)(u.a, { store: lt, children: Object(me.jsx)(nt, {}) }),
        document.getElementById("root")
      );
    },
    62: function (e, t, n) {},
    63: function (e, t, n) {},
    89: function (e, t, n) {},
    90: function (e, t, n) {},
    91: function (e, t, n) {},
    92: function (e, t, n) {},
    93: function (e, t, n) {},
    95: function (e, t, n) {},
    96: function (e, t, n) {},
    97: function (e, t, n) {},
    98: function (e, t, n) {},
    99: function (e, t, n) {},
  },
  [[106, 1, 2]],
]);
//# sourceMappingURL=main.c31a39f1.chunk.js.map
