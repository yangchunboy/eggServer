module.exports = app => {
  const mongoose = app.mongoose;
  const { Schema, model, Types } = mongoose

  const UserSchema = new Schema({
    _id: {
      type: String,
      default: Types.ObjectId().toString(), // 将_id设为字符串
    },
    username: { type: String  },
    password: { type: String  },
    createdAt: {
      type: Date,
    },
    removed: {
      type: Number,
      default: 0
    }
  }, {
    versionKey: false,
    timestamps: { // 新增数据默认插入createdAt，修改数据默认插入updatedAt更新时间
      createdAt: true,
      updatedAt: true
    }
  });

  // 执行创建前的操作
  UserSchema.pre('save', function (next) {
    this.removed = 0
    next()
  });


  return model('User', UserSchema, 'user');
}